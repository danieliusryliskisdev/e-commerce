const express = require("express");
const cors = require("cors"); // Import cors
const app = express();

app.use(cors()); // Enable CORS

app.get("/", (req, res) => res.send("Express on aaaaa"));
app.get("/api", (req, res) => res.send("Hello"));

app.listen(3001, () => console.log("Server ready on port 3001."));
