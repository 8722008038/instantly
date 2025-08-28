// backend/server.js
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // <-- allows reading JSON request body

// Mock user storage (replace with DB later)
let users = [];
let refreshTokens = [];

// Secret keys (in real app, store securely in .env)
const ACCESS_TOKEN_SECRET = "supersecretaccesstoken";
const REFRESH_TOKEN_SECRET = "supersecretrefreshtoken";

// Generate tokens
function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "30s" }); // short expiry for demo
}
function generateRefreshToken(user) {
  const token = jwt.sign(user, REFRESH_TOKEN_SECRET);
  refreshTokens.push(token);
  return token;
}

// ---------------- AUTH ROUTES ----------------
// Routes
app.use("/auth", authRoutes);

// Register
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username & password required" });
  }

  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { id: Date.now(), username, password };
  users.push(newUser);

  res.json({ message: "✅ User registered successfully" });
});

// Login
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const userData = { id: user.id, username: user.username };
  const accessToken = generateAccessToken(userData);
  const refreshToken = generateRefreshToken(userData);

  res.json({ accessToken, refreshToken });
});

// Token refresh
app.post("/auth/refresh", (req, res) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  if (!refreshTokens.includes(token)) return res.sendStatus(403);

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({
      id: user.id,
      username: user.username,
    });
    res.json({ accessToken });
  });
});

// Logout
app.post("/auth/logout", (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== token);
  res.json({ message: "✅ Logged out successfully" });
});

// mongo

mongoose
  .connect(
    "mongodb+srv://Revacopo:nihal123@cluster0.wky8wmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected atlas "))
  .catch((err) => console.error("MongoDB connection error:", err));

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// ------------------------------------------------

app.listen(PORT, () => {
  console.log(`🚀 Auth server running on http://localhost:${PORT}`);
});
