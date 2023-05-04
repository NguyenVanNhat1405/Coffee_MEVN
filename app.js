const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Coffee Review Application." });
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authRouter = require("./app/routes/user");
app.use("/api/auth", authRouter);

const coffeeRouter = require("./app/routes/coffee");
app.use("/api/coffee", coffeeRouter);

module.exports = app;
