const mongoose = require("mongoose"); // Import mongoose to interact with MongoDB
const userSchema = new mongoose.Schema({
  // Define the schema for the User model
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["Employee"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema); // Export the User model based on the userSchema
