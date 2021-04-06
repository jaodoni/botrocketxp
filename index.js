const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODI4NzkzNzI2Nzg0MjQxNzE0.YGuwTg.cBWeYD4qksqHP9_xxg6SN28m3bo'

bot.login(token)
bot.on('ready', () => {
    console.log('to pronto porra')
})

bot.on('message', msg => {
    if (msg.content === 'salve') {
        msg.reply('Salve salve fml!')
    }
})

bot.on('message', msg => {
    if (msg.content === 'pedro?') {
        msg.reply('Esse é o mais brabo!')
    }

    console.log('vai se fude')
    console.log('git merdinha')
})

