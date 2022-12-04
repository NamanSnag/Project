const express = require('express');

const path = require('path');

const port = 8000;

const cookieParser = require('cookie-parser');

// db connection
const db = require('./config/mongoose');

const app = express();

// // layout
const expressLayout = require('express-ejs-layouts');

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

app.use(require('./route'));

app.listen(port, (error)=>{
    if(error)(error);
    console.log(`Server is up and running on ${port}`);
});