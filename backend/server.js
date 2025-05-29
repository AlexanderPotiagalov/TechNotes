require("dotenv").config(); // load environment variables from .env file
const express = require("express"); // import express module
const app = express(); // create an instance of express
const path = require("path"); // import path module to handle file paths
const { logEvents, logger } = require("./middleware/logger.js"); // import the logging middleware
const errorHandler = require("./middleware/errorHandler.js"); // import the error handling middleware
const cookieParser = require("cookie-parser"); // import cookie-parser middleware to handle cookies
const cors = require("cors"); // import cors middleware to handle Cross-Origin Resource Sharing
const corsOptions = require("./config/corsOptions.js"); // import CORS options from the configuration module
const connectDB = require("./config/dbConn.js"); // import the database connection module
const mongoose = require("mongoose"); // import mongoose for MongoDB interactions
const PORT = process.env.PORT || 3000; // set the port to listen on, defaulting to 3000 if not specified in environment variables

console.log(process.env.NODE_ENV); // log the current environment (development, production, etc.)

connectDB(); // connect to the MongoDB database
app.use(logger); // use the logger middleware to log requests
app.use(cors(corsOptions)); // use CORS middleware to allow cross-origin requests
app.use(express.json()); // middleware to parse JSON bodies of incoming requests
app.use(cookieParser()); // middleware to parse cookies from incoming requests
app.use("/", express.static(path.join(__dirname, "/public"))); // middleware that tells express where to find static files like css and img files
app.use("/", require("./routes/root.js")); // use the routes defined in the routes module
app.use("/users", require("./routes/userRoutes.js")); // use the user routes defined in the userRoutes module
app.use("/notes", require("./routes/noteRoutes"));
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
app.use(errorHandler); // use the error handling middleware to catch and handle errors

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB"); // log a message when the connection to MongoDB is established
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // start the server and log the port it's running on
});

mongoose.connection.on("error", (err) => {
  console.error(err); // log any errors that occur with the MongoDB connection
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  ); // log the error to a file
});
