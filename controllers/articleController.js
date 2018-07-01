// intermediary between view and models 

const db = require("../models");
console.log(db);
// defining methods 
module.exports = {

    // find all articles 
    findAll: function(req,res) {
        db.Article
            .find(req.query)
            .catch(err=> res.status(422).json(err));
            console.log(req.query);

    }
    // search articles with specific parameters
    
    // save a specific article 
    create: function(req, res) {
        console.log("Hi I'm an article")
        const article = {
           
        }
    
    // delete a specific article 
    
    // add a note to an article 
}

