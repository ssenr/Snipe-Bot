const { SlashCommandBuilder } = require('@discordjs/builders');
const delSchema = require('C:\\Users\\champ\\WebstormProjects\\snipebot\\schema\\deleteLogSchema.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Snipes a recently deleted message!'),
    async execute(interaction) {
        const results = await delSchema.find({}).sort({time: -1}).limit(1)

        if (typeof results[0] !== 'undefined') {
            interaction.reply(results[0].delId)
        } else {
            interaction.reply("There is nothing to snipe")
        }
    }
}