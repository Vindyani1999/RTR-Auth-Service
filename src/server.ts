import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import tableRoutes from "./routes/tableRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tables", tableRoutes);

// MongoDB connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
