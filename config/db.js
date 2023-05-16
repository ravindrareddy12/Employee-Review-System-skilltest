const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employee-review-system');

const db = mongoose.connection

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });

db.on('error', function(error) {
    console.error('Error in MongoDB connection:', error);
  });
  
  db.on('disconnected', function() {
    console.log('MongoDB disconnected');
  });
  
  db.once('open', function() {
    console.log('Connected to Database :: MongoDB');
  });
  
module.exports = db;