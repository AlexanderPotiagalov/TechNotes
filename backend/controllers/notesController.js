// controllers/noteController.js
const Note = require("../models/Note");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc    Get all notes (with username fallback if user was deleted)
// @route   GET /notes
// @access  Private
const getAllNotes = asyncHandler(async (req, res) => {
  // 1) Load all note documents (lean() gives plain objects)
  const notes = await Note.find().lean();
  if (!notes?.length) {
    return res.status(400).json({ message: "No notes found" });
  }

  // 2) Build a new array where each note has a valid "username" string
  const notesWithUser = await Promise.all(
    notes.map(async (note) => {
      // Fetch the user document by .user ObjectId
      const userDoc = await User.findById(note.user).lean().exec();

      // If the user was deleted, use fallback "Unknown"
      const username = userDoc ? userDoc.username : "Unknown";

      // Return an object that spreads note fields + our username
      return {
        ...note,
        username,
      };
    })
  );

  // 3) Return JSON
  res.json(notesWithUser);
});

// @desc    Create a new note
// @route   POST /notes
// @access  Private
const createNewNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body;
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title
  const duplicate = await Note.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Note title already exists" });
  }

  // Create the new note
  const note = await Note.create({ user, title, text });
  if (!note) {
    return res.status(400).json({ message: "Invalid note data received" });
  }

  // Populate the user so we can grab username
  const populatedNote = await Note.findById(note._id)
    .populate("user", "username")
    .lean();

  res.status(201).json({
    ...populatedNote,
    username: populatedNote.user.username,
  });
});

// @desc    Update a note
// @route   PATCH /notes
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.body;
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  // Check for duplicate title (ignoring the same document)
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

// @desc    Delete a note
// @route   DELETE /notes
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Note ID required" });
  }

  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  const result = await note.deleteOne();
  const reply = `Note ${result.title} with ID ${result._id} deleted`;
  res.json({ message: reply });
});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
};
