const express = require('express');

const postUsescase = require('../usescase/post.usescase');

//const auth = require('../middleweres/auth.middlewere');

const router = express.Router();

router.get('/', async (request, response) => {
    try{
        const post = await postUsescase.getAll();
        response.json({
            success: true,
            data: {post},
        })
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/', async (request, response) => {
    try{
        const postCreated = await postUsescase.create(request.body);
        response.json({
            success: true,
            data: {post: postCreated},
        });
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.get('/:id', async (request, response) => {
    try{
        const id = request.params.id;
        const post = await postUsescase.getById(id);
        response.json({
            success: true,
            data: {post},
        })
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});
router.delete('/:id', async(request, response) => {
    try{
        const {id} = request.params;
        const postDeleted = await postUsescase.deleteById(id);
        response.json({
            success: true,
            data: {post: postDeleted},
        })
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});
router.patch('/:id', async(request, response) => {
    try{
        const{id} = request.params;
        const postUpdated = await postUsescase.updateById(id, request.body);
        response.json({
            success: true,
            data: {post: postUpdated},
        })
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

module.exports = router;