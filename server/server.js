const express = require("express");
const cors = require("cors");
const connectToDataBase = require("./components/connectToDataBase");
const cookieParser = require("cookie-parser");

// Routes
const authRoutes = require("./components/routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://danieliusryliskisdev.github.io/",
    ], // Whitelisted domains
    credentials: true, // Allow credentials (cookies)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow common HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// Handle preflight requests (OPTIONS method) explicitly
app.options("*", (req, res, next) => {
  console.log("Handling OPTIONS request");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).end();
});

// Sample route
app.get("/lol", (req, res) => {
  res.send("lol");
});

// Middleware to parse incoming JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Routes for authentication
app.use("/api/auth", authRoutes);

// Connect to DB and start the server
app.listen(PORT, () => {
  connectToDataBase();
  console.log(`Running on port: ${PORT}`);
});
