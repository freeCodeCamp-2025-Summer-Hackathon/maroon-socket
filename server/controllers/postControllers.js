import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

const getPosts = async (req, res) => {
    try {
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
            }
        });

        res.status(200).json({
            success: true,
            message: 'Posts fetched successfully',
            data: posts
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content, tag } = req.body;
        const userId = req.user.id;

        if (!title || !content || !tag) {
            return res.status(400).json({
                success: false,
                message: 'Title, content, and tag are required!'
            });
        }

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
        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            data: post
        });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export { getPosts, createPost };
