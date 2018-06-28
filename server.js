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
var mongojs = require("mongojs");

var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");


// express server 5000; 
var PORT = process.env.PORT || 3000; 
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

// -----------------------------------------------------
// routes

app.get("/scrape", function (req, res) {
    // first we grab the body of the html with the request
    axios.get("http://www.techcrunch.com").then(function (response) {
        // then we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        // console.log(response.data);
        let stories = $(".post-block");
        // console.log(stories);
        // load text of stories
        stories.each(function (i, story) {
            let eachStory = {
                    headline : $(story).children(".post-block__header").children(".post-block__title").text().trim(),
                    url : $(story).children(".post-block__header").children(".post-block__title").children(".post-block__title__link").attr("href"),
                    summary : $(story).children(".post-block__content").text().trim(),
                    photo : $(story).children(".post-block__footer").children().children().children("img").attr("src")
            }
            // console.log(eachStory);
            // create news article in news collections
            db.Article.create(eachStory)
            .catch(function(err){
                console.log(err)
            });
        });
    });
    // scrape notice here
    res.status(200).end();
});

// route post 

// route delete 

// route get will load single HTML page

// -----------------------------------------------------
// start server
var server = app.listen(PORT, function() {
    console.log("Server is listening on port : " + PORT)
});