import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;
//const chatId = ; // You can store per-user too if needed

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(
        chatId,
        `Paste this Chat ID: ${chatId} into your PlantPal profile.`
    );
});

export const sendTelegramMessage = async (message, chatId) => {
    try {
        await bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Failed to send Telegram message:', error.message);
    }
};
