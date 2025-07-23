import prisma from '../lib/prismaClient.js';
import storage from '../supabase/storageClient.js';
import { randomUUID } from 'node:crypto';
import { Success } from '../lib/successClasses.js';
import { ApplicationError, ServerError } from '../errors/ErrorClasses.js';

export const getAllPLants = async (req, res, next) => {
    try {
        const plants = await prisma.plants.findMany({
            where: {
                user_id: req.user.id
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json(
            new Success('Plants retrieved successfully', plants)
        );
    } catch (error) {
        console.error('Get all plants error:', error);
        next(new ServerError('Failed to retrieve plants'));
    }
};

export const createPlant = async (req, res, next) => {
    try {
        const { name, note, water_freq } = req.body;
        let image_url = '';

        // Handle image upload if present
        if (req.file) {
            const bucket = storage.from('plant-images');
            const extension = req.file.originalname.split('.').pop();
            const uniqueFilename = `${randomUUID()}.${extension}`;

            const { error: uploadError } = await bucket.upload(
                uniqueFilename,
                req.file.buffer,
                {
                    contentType: req.file.mimetype,
                    upsert: false
                }
            );

            if (uploadError) {
                console.error('Supabase upload error:', uploadError);
                throw new ServerError('Image upload failed');
            }

            const { data: publicUrlData, error: publicUrlError } =
                bucket.getPublicUrl(uniqueFilename);

            if (publicUrlError || !publicUrlData?.publicUrl) {
                console.error('Failed to get public URL:', publicUrlError);
                throw new ServerError('Failed to generate image URL');
            }

            image_url = publicUrlData.publicUrl;
        }

        const newPlant = await prisma.plants.create({
            data: {
                name,
                note: note || null,
                image_url,
                water_freq,
                user: {
                    connect: { id: req.user.id }
                }
            }
        });

        res.status(201).json(
            new Success('Plant created successfully', newPlant)
        );
    } catch (error) {
        console.error('Create plant error:', error);
        if (error instanceof ApplicationError || error instanceof ServerError) {
            next(error);
        } else {
            next(new ServerError('Failed to create plant'));
        }
    }
};

export const logWatering = async (req, res, next) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const userId = req.user.id;
        const wateredAt = req.body.wateredAt
            ? new Date(req.body.wateredAt) // safely parse string to Date object
            : undefined; // undefined = Prisma uses default(now())

        const plant = await prisma.plants.findUnique({
            where: { id: plantId }
        });

        if (!plant) {
            throw new ApplicationError('Plant does not exist', 404);
        }

        if (plant.user_id !== userId) {
            throw new ApplicationError(
                'User does not have access to this plant',
                403
            );
        }

        const waterLog = await prisma.waterLogs.create({
            data: {
                plant_id: plantId,
                wateredAt
            }
        });

        res.status(201).json(
            new Success('Water log created successfully', waterLog)
        );
    } catch (error) {
        console.error('Log watering error:', error);
        if (error instanceof ApplicationError || error instanceof ServerError) {
            next(error);
        } else {
            next(new ServerError('Failed to log watering'));
        }
    }
};
