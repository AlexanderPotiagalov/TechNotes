const { format } = require("date-fns"); // import date-fns to format dates
const { v4: uuid } = require("uuid"); // import uuid module to generate unique IDs
const fs = require("fs"); // import file system module to handle file operations
const fsPromises = require("fs").promises; // import file system promises for async operations
const path = require("path"); // import path module to handle file paths

const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`; // format the current date and time
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`; // create a log item with date, unique ID, and message
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs")); // create logs directory if it doesn't exist
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    ); // append the log item to the specified log file
  } catch (err) {
    console.error(err); // log any errors to the console
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log"); // log the request method, URL, and origin
  console.log(`${req.method} ${req.path}`); // log the request method and path to the console
  next(); // call the next middleware in the stack
};

module.exports = { logEvents, logger }; // export the logEvents function and logger middleware for use in other files`
