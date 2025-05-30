const jwt = require("jsonwebtoken");

// Middleware to verify JWT token for protected routes
const verifyJWT = (req, res, next) => {
  // Get the Authorization header (case-insensitive)
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // Check if the header exists and starts with "Bearer "
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Extract the token part from the header
  const token = authHeader.split(" ")[1];

  // Verify the token using the secret key
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    // If valid, attach user info to the request object for downstream use
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next(); // Continue to the next middleware/route handler
  });
};

module.exports = verifyJWT;
