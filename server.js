// Pseudocode 
// running two applications at same time 
// yarn = node, yarn is serving front end server 
// use local host address through express server
// client - have a proxy property
// React handles view similar to HBS 

 // let yarn server know that all directed in local host 

// since this is a mern app wil need to add stuff here
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const mongojs = require("mongojs");
// const axios = require("axios");
// const cheerio = require("cheerio");

// express server 5000; 
var PORT = process.env.PORT || 3001; 

// set extended to true to prvent strippign objecs
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

//promise with mongoose
mongoose.Promise = global.Promise; 

// connect to mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(MONGODB_URI, {
    useMongoClient:true
});

// -----------------------------------------------------

// -----------------------------------------------------
// start api server 
var server = app.listen(PORT, function() {
    console.log("Server is listening on port : " + PORT)
});