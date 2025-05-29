const mongoose = require("mongoose"); // Import mongoose to interact with MongoDB
const connectDB = async () => {
  // Function to connect to MongoDB using Mongoose
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err); // Log any errors that occur during the connection attempt
  }
};

module.exports = connectDB; // Export the connectDB function for use in other modules
