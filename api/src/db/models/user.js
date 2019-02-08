const mongoose = require('../index');

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

/* Ele cria a collection caso ela não exista e adiciona 
Caso exista ele adiciona na collection */
const User = mongoose.model('university_students', UserSchema);

module.exports = User