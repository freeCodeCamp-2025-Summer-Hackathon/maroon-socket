import prisma from '../lib/prismaClient.js';
import { commentSchema, flattenError } from 'shared/schemas/index.js';
import { ValidationError, ApplicationError } from '../errors/ErrorClasses.js';
import { Success } from '../lib/successClasses.js';

const getAllComments = async (req, res) => {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) throw new ApplicationError('Invalid post ID');

    // Check if post exists
    const post = await prisma.post.findUnique({
        where: { id: postId }
    });
    if (!post) throw new ApplicationError('Post not found', 404);

    // Get all comments for the post
    const comments = await prisma.comment.findMany({
        where: {
            post_id: postId
        },
        include: {
            user: {
                select: {
                    username: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    res.status(200).json(
        new Success('Comments fetched successfully', comments)
    );
};

const createComment = async (req, res) => {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) throw new ApplicationError('Invalid post ID');

    const validationResult = commentSchema.safeParse(req.body);
    if (validationResult.success === false)
        throw new ValidationError(flattenError(validationResult.error));

    const { content } = validationResult.data;
    const userId = req.user.id;

    // Check if post exists
    const post = await prisma.post.findUnique({
        where: { id: postId }
    });
    if (!post) throw new ApplicationError('Post not found', 404);

    // create comment
    const comment = await prisma.comment.create({
        data: {
            content,
            post: {
                connect: {
                    id: postId
                }
            },
            user: {
                connect: {
                    id: userId
                }
            }
        }
    });

    res.status(201).json(new Success('Comment created successfully', comment));
};

export { getAllComments, createComment };
