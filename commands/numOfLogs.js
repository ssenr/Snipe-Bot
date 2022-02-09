// Requirements
const { SlashCommandBuilder } = require('@discordjs/builders');
const messageLogSchema = require("../schema/messageLogSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logsnum')
        .setDescription('Replies with the total number of logs in the database'),
    async execute(interaction) {
        // console.log(interaction.commandId); // [Interaction commandID]
        const logs = await messageLogSchema.find({})
        const numLogs = logs.length;

        interaction.reply(`There are currently ${numLogs} logs in the database.`)
    }
}
