const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            if (err){
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            if (!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user, done)=>{
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser((id, done)=>{
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});

// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is authenticated or sign in , then pass on the next function
    if (req.isAuthenticated()) {
        return next();
    }

    // if the user is not sign in 
    return res.redirect('/user/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next) {
    if(req.isAuthenticated()) {
        // req.user contains the current sign  in user from the session cookie and we are just sending these for the views 
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;