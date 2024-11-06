import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db"; // Assuming this still needs to be included for database connection
import authRoutes from "./routes/authRoutes"; // Import your authentication routes

// Load environment variables from .env file
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection
connectDB();

// Routes
app.use("/api/auth", authRoutes); // Define your authentication routes

// Test route for checking if the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Listen on a port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB (optional if connectDB is already handling it)
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
