import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter username and password'
            });
        }

        // Check if username or email exist
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ username }, { email: username }]
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password'
            });
        }

        // Generate JWT token
        const jwtToken = jwt.sign({ username: user.username }, JWT_SECRET, {
            expiresIn: '7d'
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token: jwtToken
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const signup = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        // Check if all required fields are present
        if (!fullName || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all required fields'
            });
        }

        // Check if email exists
        const existingEmail = await prisma.user.findUnique({
            where: { email }
        });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Check if username exists
        const existingUsername = await prisma.user.findUnique({
            where: { username }
        });
        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Create new user in database
        const user = await prisma.user.create({
            data: {
                fullName: fullName,
                username: username,
                email: email,
                password_hash: hashedPassword
            },
            select: {
                id: true,
                fullName: true,
                username: true,
                email: true
            }
        });
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        });
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export { login, signup };
