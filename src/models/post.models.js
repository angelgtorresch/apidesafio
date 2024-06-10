const mongoose = require('mongoose');

const modelName = 'post'

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 50,
    },
    image: {
        type: String,
        require: false,
    },
    body:{
        type: String,
        require: true,
        minLength: 2,
        maxLength: 200,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    createAt: {
        type: Date,
        require: true,
    },
    updateAt: {
        type: Date,
        require: true,
    }
    
});

module.exports = mongoose.model(modelName, schema);