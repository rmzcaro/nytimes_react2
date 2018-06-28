const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Match with /api/nyt
router
    .route("/")
    .get(articleController.findAll);


module.exports = router; 