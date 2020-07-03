const usersController = require('./usersController');
const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .get(usersController.index)
    .post(usersController.process)


module.exports = {
    userRouter
}