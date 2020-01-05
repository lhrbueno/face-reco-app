// Server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

// Environment variables
require("dotenv").config({
  path: path.join(__dirname + "/.env.development.local")
});

const PORT = process.env.SERVER_PORT;

// Routes
const loginRoutes = require("./src/routes/login");
const userRoutes = require("./src/routes/user");

// Database
const dbConfig = require("./src/config/database");
const db = require("knex")(dbConfig);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.select("TOP 1")
    .from("users")
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error trying to fetch the users from database" });
    });
});

app.use("/api", loginRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
