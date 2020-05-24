const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Messsage', messageSchema);