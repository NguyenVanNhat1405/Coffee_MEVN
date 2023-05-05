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
app.use("/api/user", authRouter);

const coffeeRouter = require("./app/routes/coffee");
app.use("/api/coffee", coffeeRouter);

const ApiError = require("./app/api-error");
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
module.exports = app;
