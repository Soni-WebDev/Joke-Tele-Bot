const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const { default: axios } = require('axios');

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello! I'm Bot. How can I help you?");
});

// Handle /echo command
bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; // Get captured text
    bot.sendMessage(chatId, resp);
});

// Handle /joke command
bot.onText(/\/joke/, async (msg) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const { setup, punchline } = response.data;

        bot.sendMessage(msg.chat.id, `${setup} ${punchline}`);
    } catch (error) {
        bot.sendMessage(msg.chat.id, "Failed to fetch a joke. Please try again later.");
    }
});

// General message handler
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    bot.sendMessage(chatId, `You said: ${text}`);
});
