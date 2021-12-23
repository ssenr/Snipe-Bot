const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    primedMessage: {
        type: String,
        required: true
    },
    primedUser: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('testing', schema);