const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    snipedMessage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('testing', schema);