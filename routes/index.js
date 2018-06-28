const path = require("path"); 
// create mountable and modular router handlers
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes 
router.use("/api", apiRoutes);

// if no API routes are hit, send the react app (later send the home page)
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "..client/build/index.html"));

});

module.exports = router; 