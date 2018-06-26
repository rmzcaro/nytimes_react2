// Pseudocode 
// running two applications at same time 
// yarn = node, yarn is serving front end server 
// use local host address through express server
// client - have a proxy property
// React handles view similar to HBS 

 // let yarn server know that all directed in local host 

// since this is a mern app wil need to add stuff here
const bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");

// express server 5000; 
var PORT = process.env.PORT || 3001; 
const app = express();

// set extended to true to prvent strippign objecs
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
};

// connect to mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI);

// start server
var server = app.listen(PORT, function() {
    console.log("Server is listening on port : " + PORT)
});