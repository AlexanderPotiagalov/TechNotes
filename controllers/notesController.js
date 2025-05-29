const Note = require("../models/Note"); // Import the Note model
const User = require("../models/User"); // Import the User model
const asyncHandler = require("express-async-handler"); // Import express-async-handler for handling async operations

// @desc Get all notes
// @route GET /notes
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().lean(); // Fetch all notes from the database
  if (!notes?.length) {
    return res.status(400).json({ message: "No notes found" }); // Return an error if no notes are found
  }

  const notesWithUser = await Promise.all(
    notes.map(async (note) => {
      const user = await User.findById(note.user).lean().exec(); // Fetch the user associated with each note
      return { ...note, username: user.username }; // Add the username to the note object
    })
  );
  res.json(notesWithUser); // Return the list of notes with associated usernames
});

// @desc Post all notes
// @route POST /notes
// @access Private
const createNewNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body; // Destructure the request body to get user, title, and text
  // Confirm that all required fields are provided
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" }); // Return an error if any field is missing
  }

  const duplicate = await Note.findOne({ title }).lean().exec(); // Check for duplicate titles
  if (duplicate) {
    return res.status(409).json({ message: "Note title already exists" }); // Return an error if the title already exists
  }

  const note = await Note.create({
    user,
    title,
    text,
  }); // Create a new note in the database

  if (note) {
    res.status(201).json({ message: `New note ${title} created` }); // Return success message if note is created
  } else {
    res.status(400).json({ message: "Invalid note data received" }); // Return an error if note creation fails
  }
});

// @desc Update all notes
// @route PATCH /notes
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.body; // Destructure the request body to get note details
  // Confirm that all required fields are provided
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" }); // Return an error if any field is missing
  }

  const note = await Note.findById(id).exec(); // Find the note by ID
  if (!note) {
    return res.status(400).json({ message: "Note not found" }); // Return an error if the note does not exist
  }

  // Check for duplicate titles
  const duplicate = await Note.findOne({ title }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Note title already exists" }); // Return an error if the title already exists
  }

  note.user = user; // Update the user associated with the note
  note.title = title; // Update the title of the note
  note.text = text; // Update the text of the note
  note.completed = completed; // Update the completion status of the note

  const updatedNote = await note.save(); // Save the updated note to the database
  res.json({ message: `${updatedNote.title} updated` }); // Return success message with updated title
});

// @desc Delete all notes
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body; // Destructure the request body to get the note ID
  if (!id) {
    return res.status(400).json({ message: "Note ID required" }); // Return an error if the note ID is not provided
  }

  const note = await Note.findById(id).exec(); // Find the note by ID
  if (!note) {
    return res.status(400).json({ message: "Note not found" }); // Return an error if the note does not exist
  }

  const result = await note.deleteOne(); // Delete the note from the database
  const reply = `Note ${result.title} with ID ${result._id} deleted`; // Prepare a success message
  res.json(reply); // Return success message
});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
}; // Export the functions to be used in routes
