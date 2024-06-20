const TelegramBot = require('node-telegram-bot-api');
const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN); 

const Coursestring = `
Gfg DSA course
`;
try{
    bot.start((ctx)=>ctx.reply('Hello there! Welcome to PaidCourseBot telegram bot. Check out available Paid courses Type - Courses '));

    bot.command('Courses',(ctx)=>ctx.reply(Coursestring));
    
    // bot.on('message', (msg) => {
    //     const chatId = msg.chat.id;
      
    //     // send a message to the chat acknowledging receipt of their message
    //     bot.sendMessage(chatId, 'Received your message');
    //   });
    
    // bot.command('course', ctx => {
    //     console.log(ctx.from)
    //     bot.telegram.sendMessage(ctx.chat.id, 'gfg course', {
    //     })
    //   })
    
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
    
        if (msg.text == "me") {
            
                bot.sendMessage(chatId, "Sumbit your name with /name {name}")
        }
    });
}
catch{
    console.log("incorrect command");
}
bot.launch();