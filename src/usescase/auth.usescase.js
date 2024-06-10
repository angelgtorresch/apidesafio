const createError = require('http-errors');

const Users = require('../models/users.model');

const jwt = require('../lib/jwt');

const encrypt = require('../lib/encrypt');

async function login(email, password) {
    const users = await Users.findOne({email: email});

    if(!users){
        throw createError(401, "dato invalido")
    }
    const isPasswordValid = await encrypt.compare(password, users.password)

    if (!isPasswordValid) {
        throw createError(401, "dato invalido");
    }
    const token = jwt.sign({ id: users.id});
    return token;
    
}
module.exports = {
    login,
}