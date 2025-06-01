const { logEvents } = require("./logger.js");
const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  ); // log the error name, message, request method, URL, and origin to the error log file
  console.log(err.stack); // log the stack trace of the error to the console
  const status = res.statusCode ? res.statusCode : 500; // get the current status code, defaulting to 500 (server error) if not set
  res.status(status); // set the response status code
  res.json({ message: err.message, isError: true }); // send a JSON response with the error message
};

module.exports = errorHandler; // export the errorHandler middleware for use in other files
