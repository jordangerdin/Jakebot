require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    if (msg.content === '!pspsps') {
        msg.channel.send('Meow!', {files: ['https://i.imgur.com/XbGEIoG.jpg']})
    }
})

client.login(process.env.BOT_TOKEN)