import { CronJob } from 'cron';
import prisma from '../lib/prismaClient.js';
import { sendTelegramMessage } from './telegram/bot.js';

/**
 * this function queries the database and sends any pending reminders to user telegram
 */
async function sendReminders() {
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
}

new CronJob('* * * * *', sendReminders, null, true);
