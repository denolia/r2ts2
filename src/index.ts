const TelegramBot = require('node-telegram-bot-api');
import * as dotenv from 'dotenv'

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

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match?.[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {


  const hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
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
