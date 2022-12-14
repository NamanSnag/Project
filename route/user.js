const express = require('express');

const router = express.Router();

const passport = require('passport');

const userController = require('../controller/user_Controller'); 

router.get('/profile/:id' ,passport.checkAuthentication ,userController.profile);

// update profile
router.post('/update/:id', passport.checkAuthentication, userController.update);

// sign up page route
router.get('/sign-up', userController.signUp);

// sign in page route
router.get('/sign-in', userController.signIn);

// sign up route
router.post('/create',userController.create);

// use passport as a middleware to authenticate
router.post('/userSession', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userController.userSession);

// sign out
router.get('/sign-out', userController.sessionEnd);

module.exports = router;