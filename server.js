const express = require("express"); // import express module
const app = express(); // create an instance of express
const path = require("path"); // import path module to handle file paths
const PORT = process.env.PORT || 3000; // set the port to listen on, defaulting to 3000 if not specified in environment variables

app.use("/", express.static(path.join(__dirname, "/public"))); // tells express where to find static files like css and img files
app.use("/", require("./routes/root.js")); // use the routes defined in the routes module
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // start the server and log the port it's running on
