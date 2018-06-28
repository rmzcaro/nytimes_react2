const router = require("express").Router();
const articlesRoute = require("./articles");

router.use("/articles", articlesRoute);

module.exports = router; 