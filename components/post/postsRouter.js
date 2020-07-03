const postsController = require('./postsController');
const express = require('express');
const postRouter = express.Router();

postRouter.route('/')
    .get(postsController.index)
    .post(postsController.process)

module.exports = {
    postRouter
}