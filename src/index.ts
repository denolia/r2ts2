const TelegramBot = require('node-telegram-bot-api');
import * as dotenv from 'dotenv'
import { KeyboardButtonPollType, WebAppInfo } from "node-telegram-bot-api";

dotenv.config()
const token = process.env.TELEGRAM_TOKEN;
console.log('Telegram bot token: ', token);

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [[{text: "Sample text"}], [{text: "Keyboard"}], [{text: "I'm robot"}]]
    }
  });
});

bot.on('message', (msg) => {


  const hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
  }

  const bye = "bye";
  if (msg.text.toString().toLowerCase().indexOf(bye) >= 0) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  }

  const robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
  }
});
