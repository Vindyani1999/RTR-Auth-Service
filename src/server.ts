import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Ensure your routes are properly defined

// MongoDB connection
connectDB();

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
