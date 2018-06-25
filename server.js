// since this is a mern app wil need to add stuff here

var mongoose = require("mongoose");

// connect to mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI);
