const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel v2 test"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;

//ygja
