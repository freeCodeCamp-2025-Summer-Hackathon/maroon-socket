import prisma from '../lib/prismaClient.js';
import storage from '../supabase/storageClient.js';
import { randomUUID } from 'node:crypto';

export const getAllPLants = async (req, res) => {
    try {
        const plants = await prisma.plants.findMany({
            where: {
                user_id: req.user.id
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json({ success: true, data: plants });
    } catch (error) {
        console.error('Get all plants error', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const createPlant = async (req, res) => {
    try {
        const { name, note, water_freq } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ success: false, message: 'Name is required' });
        }

        let image_url = '';

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
                return res.status(500).json({
                    success: false,
                    message: 'Image upload failed'
                });
            }

            const { data: publicUrlData, error: publicUrlError } =
                bucket.getPublicUrl(uniqueFilename);

            if (publicUrlError || !publicUrlData?.publicUrl) {
                console.error('Failed to get public URL:', publicUrlError);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to get public URL'
                });
            }

            image_url = publicUrlData.publicUrl;
        }

        const newPlant = await prisma.plants.create({
            data: {
                name,
                note,
                image_url,
                water_freq: water_freq ? parseInt(water_freq) : null,
                user: {
                    connect: { id: req.user.id }
                }
            }
        });

        res.status(201).json({ success: true, data: newPlant });
    } catch (error) {
        console.error('Create plant error: ', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const logWatering = async (req, res) => {
    const plantId = parseInt(req.params.plantId);
    const userId = req.user.id;
    const wateredAt = req.body.wateredAt
        ? new Date(req.body.wateredAt) // safely parse string to Date object
        : undefined; // undefined = Prisma uses default(now())

    try {
        const plant = await prisma.plants.findUnique({
            where: { id: plantId }
        });

        if (!plant) {
            return res.status(400).json({
                success: false,
                message: 'Plant does not exist'
            });
        }

        if (plant.user_id !== userId) {
            return res.status(403).json({
                success: false,
                message: 'User does not have this plant'
            });
        }

        const waterLog = await prisma.waterLogs.create({
            data: {
                plant_id: plantId,
                wateredAt
            }
        });

        res.status(201).json({ success: true, data: waterLog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    return;
};
