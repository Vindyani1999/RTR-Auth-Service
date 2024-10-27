import express from "express";
import { registerAdmin } from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin

export default router;
