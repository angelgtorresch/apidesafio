const express = require('express');

const usersUsescase = require('../usescase/users.usescase');
const auth = require('../middleweres/auth.middlewere');

const router = express.Router();

router.get('/', auth, async (request, response) => {
    try{
        const users = await usersUsescase.getAll();
        response.json({
            success: true,
            data: {users},
        })
    }catch (error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/', async (request, response) => {
    try{
        const userCreated = await usersUsescase.create(request.body);
        response.json({
            success: true,
            data: {user: userCreated},
        });
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.get('/:id', auth, async (request, response) =>{
    try{
        const id = request.params.id;
        const user = await usersUsescase.getById(id);
        response.json({
            success: true,
            data : {user},
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.delete('/:id', auth, async (request, response) => {
    try{
        const {id} = request.params;
        const userDeleted = await usersUsescase.deleteById(id);

        response.json({
            success: true,
            data: {users: userDeleted},
        });
    }catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.patch('/:id', auth, async(request, response) => {
    try{
        const {id} = request.params;
        const usersUpdated = await usersUsescase.updateById(id, request.body);
        response.json({
            success: true,
            date: {user: usersUpdated},
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }    
});

module.exports = router;