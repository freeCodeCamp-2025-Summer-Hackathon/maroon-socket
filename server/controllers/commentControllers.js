import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

const getAllComments = async (req, res) => {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid post ID'
        });
    }

    try {
        // Check if post exists
        const post = await prisma.post.findUnique({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

        // Get all comments for the post
        const comments = await prisma.comment.findMany({
            where: {
                post_id: postId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({
            success: true,
            message: 'Comments fetched successfully',
            data: comments
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const createComment = async (req, res) => {
    const postId = parseInt(req.params.id);
    if (isNaN(postId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid post ID'
        });
    }

    const { content } = req.body;
    if (!content) {
        return res.status(400).json({
            success: false,
            message: 'Content is required'
        });
    }

    try {
        const userId = req.user.id;

        // Check if post exists
        const post = await prisma.post.findUnique({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

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

        res.status(201).json({
            success: true,
            message: 'Comment created successfully',
            data: comment
        });
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export { getAllComments, createComment };
