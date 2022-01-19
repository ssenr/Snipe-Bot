// Code
module.exports = {
    name: 'voiceChannelSwitch',
    execute(member, oldChannel, newChannel) {
        if (newChannel == 735253174423781457) {
            member.roles.add('933129860371611679')
        } else if (newChannel != 735253174423781457) {
            member.roles.remove('933129860371611679')
        }
    }
}