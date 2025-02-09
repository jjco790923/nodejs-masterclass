const express = require('express');
const router = express.Router();

const {getPost, createPost, updatePost, deletePost} = require('../Controllers/post');
const {logger} = require('./middlewares/log');



router.get('/', getPost);

router.post('/', logger, createPost);

router.put('/', logger, updatePost);

router.delete('/', logger, deletePost)

router.patch('/', )

module.exports = router;
