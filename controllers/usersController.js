const User = require("../models/User"); // Import the User model
const Note = require("../models/Note"); // Import the Note model
const asyncHandler = require("express-async-handler"); // Import express-async-handler for handling async operations
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {});

// @desc Create new user
// @route Post /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}; // Export the controller functions for use in routes
