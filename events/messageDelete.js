const delSchema = require('C:\\Users\\champ\\WebstormProjects\\snipebot\\schema\\deleteLogSchema.js')

module.exports = {
    name: 'messageDelete',
    async execute(message) {
        if (message.partial) {
            message.fetch().then(fullMessage => {
                new delSchema({
                    delId: fullMessage.content,
                    time: Date.now()
                }).save()
            })
                .catch(error => {
                    console.log('Something went wrong when fetching the message:', error);
                });
        }
    }
}