const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../model/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey: 'social',
}

passport.use(new JWTStrategy(opts, (jwtPayLoad,done) => {
    User.findById(jwtPayLoad.id, (err, user) => {
        if(err) return done(err);
        if(user) return done(null, user);
        else{
            return done(null, false);
        }
    });
}));

module.exports = passport;