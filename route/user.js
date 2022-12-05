const express = require('express');

const router = express.Router();

const passport = require('passport');

const userController = require('../controller/user_Controller'); 

router.get('/profile', userController.profile);

// signup route
router.get('/sign-up', userController.signUp);

// signin route
router.get('/sign-in', userController.signIn);

// sign up route
router.post('/create',userController.create);

// use passport as a middleware to authenticate
router.post('/userSession', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userController.userSession);

module.exports = router;