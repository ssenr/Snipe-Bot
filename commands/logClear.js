const { SlashCommandBuilder } = require('@discordjs/builders');
const logSchema = require('../schema/messageLogSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clearlog')
        .setDescription('Clears amount of logs based on input')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of logs to clear').setRequired(true)),
    async execute(interaction) {
        console.log(interaction.commandId);
        const amount = await logSchema.find({}).sort({time: 1});
        const input = interaction.options.getInteger('amount');
        const counter = amount.length;
        const timeToDelete = Date.now() - (input * 3600000);

        await logSchema.deleteMany({time: {$lt: timeToDelete}});

        const counterAfterDelete = amount.length;
        const finalCounter = counter - counterAfterDelete;
        if (finalCounter === 0) {
            interaction.reply(`There are no logs older than ${input} hours.`)
        } else if (finalCounter > 0) {
            interaction.reply(`You have successfully deleted ${finalCounter} logs.`)
        }
        }
}
