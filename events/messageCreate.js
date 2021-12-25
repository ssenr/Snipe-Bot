const logSchema = require('C:\\Users\\champ\\WebstormProjects\\snipebot\\schema\\messageLogSchema.js');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        new logSchema({
            primedMessage: message.content,
            primedUser: message.author.username,
            time: Date.now()
        }).save();
    }
}
