const allowedOrigins = require("./allowedOrigins"); // Import the allowed origins from the allowedOrigins module
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // If allowed, proceed with the request
    } else {
      callback(new Error("Not allowed by CORS")); // If not allowed, throw an error
    }
  },
  credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent with requests
  optionsSuccessStatus: 200, // Set the status code for successful OPTIONS requests
};

module.exports = corsOptions; // Export the CORS options for use in other modules
