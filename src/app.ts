// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Express
// const app = express();

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(bodyParser.json()); // Parse JSON request bodies

// // Test route for checking if the server is running
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Listen on a port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI!)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Failed to connect to MongoDB", err));
