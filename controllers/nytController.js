// 04d93aff8e5144049aea96eccc5f84b6 key 

const axios = require("axios");
const db = require("../models");


// define methods for this controller

// findAll will search the NYT api and return only the entries we didn't save already
module.exports = {
    findAll: function(req,res) {
        // first is target, second is source
        const params = Object.assign(
            { apiKey: "04d93aff8e5144049aea96eccc5f84b6"},
            req.query
        );
        console.log(params);
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}

