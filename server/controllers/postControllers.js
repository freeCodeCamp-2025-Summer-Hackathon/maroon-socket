import prisma from '../lib/prismaClient.js';
import { postSchema, flattenError } from 'shared/schemas/index.js';
import { Success } from '../lib/successClasses.js';
import { ValidationError } from '../errors/ErrorClasses.js';

const getPosts = async (req, res) => {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Sorting
    const sortBy = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';

    const posts = await prisma.post.findMany({
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: order
        },
        include: {
            user: {
                select: {
                    username: true
                }
            }
        }
    });

    res.status(200).json(new Success('Posts fetched successfully', posts));
};

const createPost = async (req, res) => {
    const userId = req.user.id;
    const validationResult = postSchema.safeParse(req.body);
    if (validationResult.success === false)
        throw new ValidationError(flattenError(validationResult.error));

    const { title, content, tag } = validationResult.data;

    const post = await prisma.post.create({
        data: {
            title,
            content,
            tag,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    });
    res.status(201).json(new Success('Post created successfully', post));
};

export { getPosts, createPost };
