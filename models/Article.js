// article schema
var mongoose = require("mongoose");

// saving a reference to the schema constructor
var Schema = mongoose.Schema; 

// using the schema constructor, create a new userSchema Object 
var ArticleSchema = new Schema({
    title: {
        type: String,
    }, 
    date: {
            type: Date,
    }, 
    url: {
        type: String
    }
});

// this creates our model schema 
var Article = mongoose.model("Article", ArticleSchema);

exports.modules = Article; 


