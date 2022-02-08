// Code
module.exports = {
    name: 'voiceChannelJoin',
    execute(member, channel) {
        console.log(member+' has joined a channel' + channel);
        if (channel == 735253174423781457) {
            if (member.roles.cache.some(role => role.name === 'vc chat')) {
                console.log("User already has role");
            } else {
                member.roles.add('933129860371611679');
            }
        } else if (channel !== '735253174423781457') {
            console.log('User did not join'+ channel)
        }
    }
}