const express = require('express');

const router = express.Router();

const passport = require('passport');

const postsController = require('../controller/posts_Controller');

// post 
router.post('/create', passport.checkAuthentication, postsController.create);

// deleting the post
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy);

module.exports = router;