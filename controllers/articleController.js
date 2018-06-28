// intermediary between view and models 

const db = require("../models");
console.log(db);
// defining methods 
module.exports = {

    // find all articles 
    findAll: function(req,res) {
        db.Article
    }
    // search articles with specific parameters
    
    // save a specific article 
    
    // delete a specific article 
    
    // add a note to an article 
}

