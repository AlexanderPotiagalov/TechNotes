const Note = require("../models/Note"); // Import the Note model
const User = require("../models/User"); // Import the User model
const asyncHandler = require("express-async-handler"); // Import express-async-handler for handling async operations

// @desc Get all notes
// @route GET /notes
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {});

// @desc Post all notes
// @route POST /notes
// @access Private
const createNewNote = asyncHandler(async (req, res) => {});

// @desc Update all notes
// @route PATCH /notes
// @access Private
const updateNote = asyncHandler(async (req, res) => {});

// @desc Delete all notes
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
}; // Export the functions to be used in routes
