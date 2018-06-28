const router = require("express").Route();
const articlesRoute = require("../../controller/nytController");

// Match with "api/nyt"
// connect to controller 
router
    .route("/")
    .get(articleController.findAll);


module.exports = router; 
module.exports = router; 