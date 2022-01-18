// Requirements + Requirements from config.json
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const logs = require('discord-logs');
const delSchema = require('./schema/deleteLogSchema');

// Client Creation
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

logs(client, {
    debug: false
});

client.commands = new Collection();

// Command + Event Handling [Reading]
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


// Command + Event Handling Execution
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// 1 more interaction
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
    }
});

client.on("voiceChannelJoin", (member, channel) => {
    console.log(member+' has joined a channel' + channel);
    if (channel == 735253174423781457) {
        if (member.roles.cache.some(role => role.name === 'vc chat')) {
            console.log("User already has role");
        } else {
            member.roles.add('933129860371611679');
        }
    } else if (channel !== '735253174423781457') {
        console.log('User did not join'+ channel)
    }

});

client.on("voiceChannelLeave", (member, channel) => {
   member.roles.remove('933129860371611679');
});

client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
    if (newChannel == 735253174423781457) {
        member.roles.add('933129860371611679')
    } else if (newChannel != 735253174423781457) {
        member.roles.remove('933129860371611679')
    }
});

// Sign in
client.login(token);