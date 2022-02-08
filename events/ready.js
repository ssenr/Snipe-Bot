const mongoose = require('mongoose');
const { connectionString } = require('../config.json');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        mongoose.connect(connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Connected to the database');
        }).catch((err) => {
            console.log(err);
        })
        const fullPermissions = [
            {
                id: '926679601164476479',
                permissions: [{
                    id: '621287295865061376',
                    type: 'ROLE',
                    permission: false,
                }],
            },
            {
                id: '926679601164476481',
                permissions: [{
                    id: '621287295865061376',
                    type: 'ROLE',
                    permission: false,
                }]
            },
            {
                id: '933160264969355347',
                permissions: [{
                    id: '621287295865061376',
                    type: 'ROLE',
                    permission: true,
                }]
            },
            {
                id: '926679601164476480',
                permissions: [{
                    id: '621287295865061376',
                    type: 'ROLE',
                    permission: false,
                }]
            },
            {
                id: '926679601164476478',
                permissions: [{
                    id: '621287295865061376',
                    type: 'ROLE',
                    permission: false,
                }]
            }
        ];
        await client.guilds.cache.get('621286885615992834')?.commands.permissions.set({ fullPermissions });
    },
};