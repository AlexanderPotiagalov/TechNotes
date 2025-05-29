const express = require("express"); // import express module
const router = express.Router(); // create a new router instance
const path = require("path"); // import path module to handle file paths

router.get(["/", "/index", "/index.html"], (req, res) => {
  // define a route for the root path and index paths
  res.sendFile(path.join(__dirname, "..", "views", "index.html")); // send the index.html file located in the views directory
}); //middleware to handle GET requests to the root path and index paths

module.exports = router; // export the router so it can be used in other files
