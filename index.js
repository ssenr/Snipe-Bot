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

client.once('ready', async client => {
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

client.on('messageCreate', async message => {
    new logSchema({
        primedMessage: message.content,
        primedUser: message.author.username,
        time: Date.now()
      }).save()
    await logSchema.deleteOne({}).sort({time: 1}).limit(1)
 });

client.on('messageDelete', message => {
    if (message.partial) {
        message.fetch()
            .then(fullMessage => {
                new delSchema({
                    delId: fullMessage.content,
                    time: Date.now()
                }).save()
            })
            .catch(error => {
                console.log('Something went wrong when fetching the message:', error);
            });

    } else {
        console.log(message.content);
            new delSchema({
                delId: message.content,
                time: Date.now()
            }).save()
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong');
    } else if (commandName === 'snipe') {
        // Retrieve Function [Sort]
        const results = await delSchema.find({
            delId: ' '
        })
            .sort({
                time: -1
            })
            .limit(1)
        console.log(results)
        // Delete Function [Data Management]
        const deleteOneLog = await delSchema.deleteOne({}).sort({
            time: 1
        })
            .limit(1)
        console.log(deleteOneLog)
        interaction.reply(`The message you have sniped is ${delId}`)
    }
});

client.login(token);