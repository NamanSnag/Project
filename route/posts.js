const express = require('express');

const router = express.Router();

const postsController = require('../controller/posts_Controller');

// post comment
router.post('/create', postsController.create);

module.exports = router;