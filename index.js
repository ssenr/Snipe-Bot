// Requirements + Requirements from config.json
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const mongoose = require('mongoose');
const { connectionString } = require('./config.json');
const logSchema = require('./messageLogSchema');
const delSchema = require('./deleteLogSchema');

// Client Creation
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']

});


client.commands = new Collection();

client.once('ready', client => {
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

client.on('messageCreate', message => {
    new logSchema({
        primedMessage: message.content,
        primedUser: message.author.username,
    }).save()
});

client.on('messageDelete', message => {
    if (message.partial) {
        message.fetch()
            .then(fullMessage => {
                new delSchema({
                    delId: fullMessage.content,
                }).save()
            })
            .catch(error => {
                console.log('Something went wrong when fetching the message:', error);
            });

    } else {
        console.log(message.content);
    }
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



client.login(token);