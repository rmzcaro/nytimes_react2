// Pseudocode 
// running two applications at same time 
// yarn = node, yarn is serving front end server 
// use local host address through express server
// client - have a proxy property
// React handles view similar to HBS 

 // let yarn server know that all directed in local host 

// since this is a mern app wil need to add stuff here

// 

var mongoose = require("mongoose");

// connect to mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI);

// express server 5000; 
