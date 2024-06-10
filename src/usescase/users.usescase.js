const createError = require('http-errors');
const encryp = require('../lib/encrypt');
const Users = require('../models/users.model');


async function getAll (){
    const allUsers = await Users.find()
    return allUsers;
}
async function getById (id) {
    const user = await Users.findById(id)
    return user;
}
async function create (usersData) {
    const usersFound = await Users.findOne({email: usersData.email});
    if (usersFound){
        throw createError(409, "el correo ya esta en uso");
    }
    usersData.password = await encryp.encrypt(usersData.password);

    const newUsers = await Users.create(usersData);
    return newUsers;
}
async function deleteById (id) {
    const usersDelete = await Users.findByIdAndDelete(id);
    return usersDelete;
}

async function updateById (id, newUsersData) {
    const updateUsers = await Users.findByIdAndUpdate(id, newUsersData, {new: true,})
    return updateUsers
}

module.exports = {
    getById,
    getAll,
    create,
    deleteById,
    updateById,
}
