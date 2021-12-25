const mongoose = require('mongoose');
const { connectionString } = require('C:\\Users\\champ\\WebstormProjects\\snipebot\\config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
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
    },
};