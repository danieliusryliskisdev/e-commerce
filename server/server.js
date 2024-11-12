const express = require("express");
const cors = require("cors");
const connectToDataBase = require("./components/connectToDataBase");
const cookieParser = require("cookie-parser");

// Routes
const authRoutes = require("./components/routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://parduotuvele.vercel.app"], // List of allowed origins
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToDataBase();
  console.log(`running on port: ${PORT}`);
});
