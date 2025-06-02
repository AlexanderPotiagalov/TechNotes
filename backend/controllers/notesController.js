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
  const { user, title, text } = req.body;

  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate note title
  const duplicate = await Note.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Note title already exists" });
  }

  // Create note
  const note = await Note.create({ user, title, text });

  if (!note) {
    return res.status(400).json({ message: "Invalid note data received" });
  }

  // Populate and return the full note with username
  const populatedNote = await Note.findById(note._id)
    .populate("user", "username")
    .lean();

  res.status(201).json({
    ...populatedNote,
    username: populatedNote.user.username,
  });
});

// @desc Update all notes
// @route PATCH /notes
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.body;

  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  const duplicate = await Note.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Note title already exists" });
  }

  note.user = user;
  note.title = title;
  note.text = text;
  note.completed = completed;

  const updatedNote = await note.save();

  const populatedNote = await Note.findById(updatedNote._id)
    .populate("user", "username")
    .lean();

  res.json({
    ...populatedNote,
    username: populatedNote.user.username,
  });
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
