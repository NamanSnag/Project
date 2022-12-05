const express = require('express');

const router = express.Router();

const userController = require('../controller/user_Controller'); 

// profile page

router.get('/profile', userController.profile);

// signup route
router.get('/sign-up', userController.signUp);

// signin route
router.get('/sign-in', userController.signIn);

// sign up route
router.post('/create', userController.create);

// sign in route
router.post('/profile', userController.userSession);

// sign out
router.get('/logout', userController.signOut);


module.exports = router;