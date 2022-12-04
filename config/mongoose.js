const mongoose = require('mongoose');

const db = mongoose.connection;

//connect to the database
mongoose.connect('mongodb://localhost/toDoApp');

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});