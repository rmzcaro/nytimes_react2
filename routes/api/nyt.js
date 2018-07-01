const router = require("express").Router();
const articleController = require("../../controllers/nytController");

// Match with "api/nyt"
// connect to controller 
router
    .route("/")
    .get(articleController.findAll);

module.exports = router; 