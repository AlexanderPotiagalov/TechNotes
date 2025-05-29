const mongoose = require("mongoose"); // Import mongoose to interact with MongoDB
const AutoIncrement = require("mongoose-sequence")(mongoose); // Import mongoose-sequence for auto-incrementing fields
const noteSchema = new mongoose.Schema(
  {
    // Define the schema for the Note model
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dates: {
      created: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
      },
      updated: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
      },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
  }
);

noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums", // Unique identifier for the sequence
  start_seq: 0, // Start the sequence from 500
});

module.exports = mongoose.model("Note", noteSchema); // Export the User model based on the userSchema
