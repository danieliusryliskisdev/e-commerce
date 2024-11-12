// Import necessary modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDataBase = require("./components/connectToDataBase");
const authRoutes = require("./components/routes/authRoutes");
require("dotenv").config(); // Load environment variables at the top

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://danieliusryliskisdev.github.io",
];

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("CORS policy error")); // Reject the request
    }
  },
  credentials: true, // Allow cookies
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow common HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

// Middleware to handle CORS and preflight requests
app.use(cors(corsOptions));
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).end(); // End the OPTIONS preflight request
});

// Middleware for JSON parsing and cookie handling
app.use(express.json());
app.use(cookieParser());

// Sample route to test server functionality
app.get("/", (req, res) => {
  res.send("working");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Database connection and server start
const startServer = async () => {
  try {
    await connectToDataBase(); // Ensure database connection before starting the server
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit if the database connection fails
  }
};

// Start the server
startServer();
