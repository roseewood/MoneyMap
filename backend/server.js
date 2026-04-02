require("dotenv").config({ path: __dirname + "/.env" });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//  Create app
const app = express();

// Debug (check env)
console.log("MONGO_URI:", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const transactionRoutes = require("./routes/transactionRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/transactions", transactionRoutes);
app.use("/api/auth", authRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));