import cron from 'node-cron';
import prisma from '../lib/prismaClient.js';
import { sendTelegramMessage } from './telegram/bot.js';

// cron.schedule('* * * * *', async () => {
//     const plants = await prisma.plants.findMany({
//         where: {
//             water_freq: { not: null }
//         },
//         include: {
//             user: true
//         }
//     });

//     for (const plant of plants) {
//         // check if any reminder exists for this plant
//         // first time we add a plant, there is a no corresponding reminder record with nextRun..
//         const existing = await prisma.reminder.findFirst({
//             where: {
//                 user_id: plant.user_id,
//                 plant_id: plant.id
//             }
//         });

//         if (!existing) {
//             //calculate nextRun based on water_freq (assuming water_freq is in days).
//             // for demo day probably a every minute reminder will be helpful
//             const nextRun = new Date();
//             nextRun.setMinutes(nextRun.getMinutes() + plant.water_freq);

//             await prisma.reminder.create({
//                 data: {
//                     user_id: plant.user_id,
//                     plant_id: plant.id,
//                     nextRun
//                 }
//             });
//         }
//     }
// });

cron.schedule('* * * * *', async () => {
    const now = new Date().toISOString();
    console.log(`Finding reminders where nextRun is due or past: ${now}`);

    // find all reminders where nextRun is due or past
    const dueReminders = await prisma.reminder.findMany({
        where: {
            nextRun: {
                lte: now
            }
        },
        include: {
            plant: true,
            user: true
        }
    });
    console.log(dueReminders);

    for (const reminder of dueReminders) {
        if (reminder.user && reminder.user.telegram_chat_id) {
            const message = `🔔: Time to water your plant "${reminder.plant.name}". You will get this reminder every ${reminder.plant.water_freq} day(s)!`;
            await sendTelegramMessage(message, reminder.user.telegram_chat_id);
        }

        //update nextRun for the next reminder cycle
        if (reminder.plant && reminder.plant.water_freq) {
            const nextRun = new Date();
            nextRun.setMinutes(
                nextRun.getMinutes() + reminder.plant.water_freq
            );
            await prisma.reminder.update({
                where: { id: reminder.id },
                data: { nextRun }
            });
        }
    }
});
