const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Snipes a recently deleted message!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}