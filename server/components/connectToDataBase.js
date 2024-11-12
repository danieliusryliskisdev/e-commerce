const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; // Directly use MONGO_URI from the environment
    if (!MONGO_URI) {
      console.error("MONGO_URI is not defined in the environment variables");
      return;
    }

    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDataBase;
