import jwt from 'jsonwebtoken';
import prisma from '../lib/prismaClient.js';
import { AuthenticationError } from '../errors/ErrorClasses.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

/**
 * this middleware will extract and decode the jwt token form authorization header, query the database for user
 * and attach the user object to request. Will throw error if token is invalid or user is not found
 */
const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer'))
        throw new AuthenticationError('Invalid Authorization header schema');

    const token = authHeader.split(' ')[1];

    //will throw error if token is invalid or expired which will be caught by errorHandler
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
        where: { username: decoded.username }
    });

    if (!user) throw new AuthenticationError('User not found');

    req.user = user;
    next();
};

export default requireAuth;
