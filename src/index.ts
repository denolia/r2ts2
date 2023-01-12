const TelegramBot = require('node-telegram-bot-api');
import * as dotenv from 'dotenv'

dotenv.config()
const token = process.env.TELEGRAM_TOKEN;
console.log('Telegram bot token: ', token);

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  const hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
  }

});
