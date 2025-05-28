const express = require("express"); // import express module
const app = express(); // create an instance of express
const path = require("path"); // import path module to handle file paths
const { logEvents, logger } = require("./middleware/logger.js"); // import the logging middleware
const PORT = process.env.PORT || 3000; // set the port to listen on, defaulting to 3000 if not specified in environment variables

app.use(logger); // use the logger middleware to log requests
app.use(express.json()); // middleware to parse JSON bodies of incoming requests

app.use("/", express.static(path.join(__dirname, "/public"))); // middleware that tells express where to find static files like css and img files
app.use("/", require("./routes/root.js")); // use the routes defined in the routes module
app.all("*", (req, res) => {
  // catch-all route for any other requests
  res.status(404);
  if (req.accepts("html")) {
    // if the request accepts HTML, send a 404 page
    res.sendFile(path.join(__dirname, "views", "404.html")); // send the 404.html file located in the views directory
  } else if (req.accepts("json")) {
    // if the request accepts JSON, send a JSON response
    res.json({ message: "404 Not Found" }); // send a JSON object with an error message
  } else {
    // if the request accepts neither HTML nor JSON, send a plain text response
    res.type("txt").send("404 Not Found"); // send a plain text response indicating the resource was not found
  }
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // start the server and log the port it's running on
