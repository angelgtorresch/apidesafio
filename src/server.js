const cors = require('cors');
const express = require('express');
const usersRouter = require('./routes/users.routes');
const postRouter = require('./routes/post.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use ('/users', usersRouter);

app.use('/post', postRouter);

app.use('/auth', authRouter);

app.get('/', (request, response) => {
    response.json({
        message: "api APIv1",
    });
});

module.exports = app;