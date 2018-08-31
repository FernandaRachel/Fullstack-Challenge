const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    participacao: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User