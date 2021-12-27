const logSchema = require('C:\\Users\\champ\\WebstormProjects\\snipebot\\schema\\messageLogSchema.js');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        var today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2,'0');
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd + ' '

        new logSchema({
            primedMessage: message.content,
            primedUser: message.author.username,
            time: Date.now(),
            date: new Date(),
        }).save();
        }
    }
