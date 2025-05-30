const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController"); // Import the users controller
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router // Create a new router instance for user-related routes
  .route("/")
  .get(usersController.getAllUsers) // Handle GET requests to retrieve all users
  .post(usersController.createNewUser) // Handle POST requests to create a new user
  .patch(usersController.updateUser) // Handle PATCH requests to update an existing user
  .delete(usersController.deleteUser); // Handle DELETE requests to delete a user

module.exports = router; // Export the router so it can be used in other files
