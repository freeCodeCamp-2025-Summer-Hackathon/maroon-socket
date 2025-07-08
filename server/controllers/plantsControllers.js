import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

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
        const { name, note, image_url, water_freq } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ success: false, message: 'Name is required' });
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
