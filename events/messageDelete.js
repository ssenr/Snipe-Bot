const messageLogSchema = require('../schema/messageLogSchema')
const delSchema = require("../schema/messageLogSchema");

module.exports = {
    name: 'messageDelete',
    async execute(message) {
        if (message.content === "") {
            console.log("Empty Message");
        } else {
            if (message.partial) {
                message.fetch().then(fullMessage => {
                    new messageLogSchema({
                        author: message.author.tag,
                        authorId: message.author.id,
                        pfpUrl: message.author.avatar,
                        content: message.content,
                        createdAt: message.createdAt,
                        createdTimestamp: message.createdTimestamp
                    }).save()
                })
                    .catch(error => {
                        console.log('Something went wrong when fetching the message:', error);
                    });
            } else {
                console.log(message.content);
                new messageLogSchema({
                    author: message.author.tag,
                    authorId: message.author.id,
                    pfpUrl: message.author.avatar,
                    content: message.content,
                    createdAt: message.createdAt,
                    createdTimestamp: message.createdTimestamp
                }).save()
            }
        }

        // Deprecated Code, doesn't function as intended
        const delete1 = await delSchema.find({}).sort({createdTimestamp: 1}).limit(1)
        if (delete1[0]) {
            messageLogSchema.deleteOne(delete1)
        } else {

        }
    }
}