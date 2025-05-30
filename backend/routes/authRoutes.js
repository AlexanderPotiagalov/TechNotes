const express = require("express"); // Import express to create a router for handling authentication routes
const router = express.Router(); // Create a new router instance
const authController = require("../controllers/authController"); // Import the authentication controller to handle authentication logic
const loginLimiter = require("../middleware/loginLimiter"); // Import the login limiter middleware to prevent brute force attacks

router.route("/").post(loginLimiter, authController.login); // Route for user login
router.route("/refresh").get(authController.refresh); // Route to handle refresh token
router.route("/logout").post(authController.logout); // Route for user logout

module.exports = router; // Export the router to be used in the main app file
