// Code
module.exports = {
    name: 'voiceChannelLeave',
    execute(member, channel) {
        member.roles.remove('933129860371611679')
    }
}