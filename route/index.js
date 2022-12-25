const express = require('express');

const router = express.Router();

// aquiring home action
const homeController = require('../controller/home_Controller');

// user routes link
router.use('/user', require('./user'));

// 
router.use('/posts', require('./posts'));

// comments 
router.use('/comments', require('./comments'));

// all routes
router.get('/', homeController.homepage);

// versions file
router.use('/api',require('./api'))

module.exports = router;