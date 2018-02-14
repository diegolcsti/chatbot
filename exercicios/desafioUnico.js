const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    if(ctx.update.message.from.id === 465857318){
        ctx.reply('Ao seu dispor, mestre!!')
    }else{
        ctx.reply('Sinto muito, mas eu só falo com meu mestre')
    }
})

bot.startPolling()