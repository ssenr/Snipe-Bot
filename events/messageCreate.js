const logSchema = require('../schema/messageLogSchema');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        console.log(message.content);
        }
    }
