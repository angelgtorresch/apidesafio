const createError = require('http-errors');

const usersUsescase = require('../usescase/users.usescase');

const jwt = require('../lib/jwt');

async function auth(request, response, next) {
    try{
        const token = request.headers.authorization;

        if (!token) {
            throw createError(401, 'JWT es requerido');
        }
        const payload = jwt.verify(token);
        const users = await usersUsescase.getById(payload.Id);

        request.user = users;

        next ();
    }catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message,
        })        
    }
}

module.exports = auth;