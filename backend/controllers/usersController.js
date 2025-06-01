const User = require("../models/User"); // Import the User model
const Note = require("../models/Note"); // Import the Note model
const asyncHandler = require("express-async-handler"); // Import express-async-handler for handling async operations
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean(); // Fetch all users excluding the password field
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" }); // Return an error if no users are found
  }
  res.json(users); // Return the list of users
});

// @desc Create new user
// @route Post /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body; // Destructure the request body to get username, password, and roles

  // Confirm that all required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" }); // Return an error if any field is missing
  }

  // Check for duplicate usernames
  const duplicate = await User.findOne({ username })
    .collation({ locale: "en", strength: 2 }) // Checks case insensitivity (Prevents duplicate usernames)
    .lean()
    .exec();
  if (duplicate) {
    return res.status(409).json({ message: "Username already exists" }); // Return an error if the username already exists
  }

  const hashedPwd = await bcrypt.hash(password, 10); // Hash the password with bcrypt
  const userObject =
    !Array.isArray(roles) || !roles.length
      ? { username, password: hashedPwd }
      : { username, password: hashedPwd, roles }; // Create a new user object
  const user = await User.create(userObject); // Create a new user in the database

  if (user) {
    res.status(201).json({ message: `New user ${username} created` }); // Return success message if user is created
  } else {
    res.status(400).json({ message: "Invalid user data received" }); // Return an error if user creation fails
  }
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, active, password } = req.body; // Destructure the request body to get user details

  // Confirm that all required fields are provided
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({ message: "All fields are required" }); // Return an error if any field is missing
  }

  const user = await User.findById(id).exec(); // Find the user by ID
  if (!user) {
    return res.status(404).json({ message: "User not found" }); // Return an error if the user does not exist
  }

  // Check for duplicate usernames
  const duplicate = await User.findOne({ username })
    .collation({ locale: "en", strength: 2 }) // Checks case insensitivity (Prevents duplicate usernames)
    .lean()
    .exec();
  // Allow updates to the same user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Username already exists" }); // Return an error if the username already exists
  }

  user.username = username; // Update the username
  user.roles = roles; // Update the roles
  user.active = active; // Update the active status

  if (password) {
    user.password = await bcrypt.hash(password, 10); // Hash the new password if provided
  }

  const updatedUser = await user.save(); // Save the updated user to the database

  res.json({ message: `${updatedUser.username} updated` }); // Return success message with updated username
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body; // Destructure the request body to get the user ID
  if (!id) {
    return res.status(400).json({ message: "User ID required" }); // Return an error if the user ID is not provided
  }

  const note = await Note.findOne({ user: id }).lean().exec(); // Check if the user has any notes
  if (note) {
    return res.status(400).json({ message: "User has assigned notes" }); // Return an error if the user has notes
  }

  const user = await User.findById(id).exec(); // Find the user by ID
  if (!user) {
    return res.status(404).json({ message: "User not found" }); // Return an error if the user does not exist
  }

  const result = await user.deleteOne(); // Delete the user from the database
  const reply = `Username ${result.username} with ID ${result._id} deleted`; // Create a reply message with the deleted user's details
  res.json(reply); // Return the reply message
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}; // Export the controller functions for use in routes
