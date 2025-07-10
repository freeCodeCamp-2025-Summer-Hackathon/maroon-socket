import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer')) {
        return res
            .status(401)
            .json({ success: false, message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { username: decoded.username }
        });

        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: 'Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        return res
            .status(401)
            .json({ success: false, message: 'Token invalid' });
    }
};

export default requireAuth;
