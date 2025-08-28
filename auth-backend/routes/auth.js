const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  console.log("Register req.body:", req.body); // Debug log
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username & password required" });
    }

    // check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Don't hash password here, let Mongoose pre-save hook handle it
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // generate tokens
    const accessToken = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ id: user._id }, "your_refresh_secret", {
      expiresIn: "7d",
    });

    res.json({
      user: { id: user._id, username: user.username },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
