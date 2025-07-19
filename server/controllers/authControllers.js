import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {
    loginSchema,
    signupSchema,
    flattenError
} from 'shared/schemas/index.js';
import prisma from '../lib/prismaClient.js';
import { ApplicationError, ValidationError } from '../errors/ErrorClasses.js';
import { Success } from '../lib/successClasses.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

const login = async (req, res) => {
    const ValidationResult = loginSchema.safeParse(req.body);

    if (ValidationResult.success === false) {
        const errors = flattenError(ValidationResult.error);
        throw new ValidationError(errors);
    }

    const { username, password } = ValidationResult.data;

    // Check if username or email exist
    const user = await prisma.user.findFirst({
        where: {
            OR: [{ username }, { email: username }]
        }
    });

    if (!user) {
        throw new ApplicationError('User not found');
    }

    // Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        throw new ApplicationError('Incorrect Password');
    }

    // Generate JWT token
    const jwtToken = jwt.sign({ username: user.username }, JWT_SECRET, {
        expiresIn: '7d'
    });

    return res
        .status(201)
        .json(new Success('Login successful', { token: jwtToken }));
};

const signup = async (req, res) => {
    const ValidationResult = signupSchema.safeParse(req.body);

    if (ValidationResult.success === false) {
        const errors = flattenError(ValidationResult.error);
        throw new ValidationError(errors);
    }

    const { username, email, fullName, password } = ValidationResult.data;

    // Check if email exists
    const existingEmail = await prisma.user.findUnique({
        where: { email }
    });
    if (existingEmail) {
        throw new ApplicationError('Email already exists');
    }

    // Check if username exists
    const existingUsername = await prisma.user.findUnique({
        where: { username }
    });
    if (existingUsername) {
        throw new ApplicationError('Username is already taken');
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

    return res.status(201).json(new Success('User created successfully', user));
};

export { login, signup };
