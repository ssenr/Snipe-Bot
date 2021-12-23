// Requirements + Requirements from config.json
const fs = require('fs');
const { Client, Intents, Collection, Message} = require('discord.js');
const { token } = require('./config.json');
const mongoose = require('mongoose');
const { connectionString } = require('./config.json');
const testSchema = require('./test-schema');

// Client Creation
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

client.once('ready', ready => {
    console.log('Ready!');
    mongoose.connect(connectionString, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Connected to the database');
    }).catch((err) => {
        console.log(err);
    })
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong');
    } else if (commandName === 'snipe') {
        await interaction.reply('Sniped')
    }
});

client.on('messageCreate', message => {
    new testSchema({
        snipedMessage: message.content,
    }).save()
});

client.login(token);