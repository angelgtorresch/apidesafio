const mongoose = require('mongoose');

const modelName = 'users'

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 20,
    },
    profilePic: {
        type: String,
        requiered: true,
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model(modelName, schema);