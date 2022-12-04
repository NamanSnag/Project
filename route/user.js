const express = require('express');

const router = express.Router();

const userController = require('../controller/user_Controller'); 

// signup route
router.get('/sign-up', userController.signUp);

// signin route
router.get('/sign-in', userController.signIn);

// sign up route
router.post('/create', userController.create);

module.exports = router;