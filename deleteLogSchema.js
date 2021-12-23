const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    delId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('deleteLog', schema);