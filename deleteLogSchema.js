const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    delId: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('deleteLog', schema);