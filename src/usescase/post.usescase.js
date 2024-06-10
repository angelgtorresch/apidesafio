const post = require('../models/post.models');

async function create(postData) {
    const newPOst = await post.create(postData);
    return newPOst;
}
async function getAll() {
    const allPost = await post.find();
    return allPost;
}
async function getById(id) {
    const post = await post.findById (id);
    return post;
}
async function deleteById(id) {
    const postDeleted = await post.findByIdAndDelete(id);
    return postDeleted;
}
async function updateById (id, newPostData) {
    const updatePost = await post.findByIdandUpdate(id, newPostData, {new: true,});
    return updatePost;
}
module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};