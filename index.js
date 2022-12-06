const express = require('express');

const path = require('path');

const port = 8000;

const cookieParser = require('cookie-parser');

// db connection
const db = require('./config/mongoose');

const app = express();

// // layout
const expressLayout = require('express-ejs-layouts');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');

const MongoStore = require('connect-mongo');

// view engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'view'));

app.use(expressLayout);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// cookies setup
app.use(cookieParser());

// urlencoded add to extract data from
app.use(express.urlencoded());

// for authentication purposes
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/Passbook',
        autoRemove: 'disabled'
    },(error)=>{
        if(error){
            console.log(error+"mongo store");
        }
        console.log("mongo store saved");
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./route'));

app.listen(port, (error)=>{
    if(error)(error);
    console.log(`Server is up and running on ${port}`);
});