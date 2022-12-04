const express = require('express');

const router = express.Router();

// aquiring home action
const homeController = require('../controller/home_Controller');

// user routes link
router.use('/user', require('./user'));

// all routes
router.get('/', homeController.homepage);

module.exports = router;