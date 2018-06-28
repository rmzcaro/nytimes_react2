const router = require("express").Router();
// importing object controller 
const articleController = require("../../controllers/articleController.js");

// match with /api/articles
router.route("/")
.get(articleController.findAll)
// .post(articleController.create);

module.exports = router;
