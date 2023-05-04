const { hash, compare } = require("bcryptjs");
const express = require("express");
const User = require("../models/User");
const router = express.Router();

//1. Register a users
exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "missing username and/or password" });
  try {
    //1. check if user exist
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });
    //2. if not user exist, hash the password
    const hashedPassword = await hash(password, 10);
    //3. insert user in database
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
    newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//2. Login a user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "missing username and/or password" });
  try {
    const user = await User.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    const passedValid = await compare(password, user.password);
    if (!passedValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    return res
      .status(200)
      .json({ success: true, message: "Login successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
