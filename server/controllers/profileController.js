import prisma from '../lib/prismaClient.js';
import { Success } from '../lib/successClasses.js';
import { ApplicationError, ValidationError } from '../errors/ErrorClasses.js';
import { chatIdSchema, flattenError } from 'shared/schemas/index.js';

export const setChatId = async (req, res) => {
    const validation = chatIdSchema.safeParse(req.body);
    const userId = req.user.id;

    if (!validation.success) {
        const errors = flattenError(validation.error);
        throw new ValidationError(errors);
    }

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { telegram_chat_id: validation.data.chatId }
        });

        return res.json(
            new Success('Chat Id was set successfully', {
                chatId: updatedUser.telegram_chat_id
            })
        );
    } catch (error) {
        throw new ApplicationError(error.message);
    }
};
