const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Snipes a Message'),
    async execute(interaction) {
        await interaction.reply('snipe');
    },
};