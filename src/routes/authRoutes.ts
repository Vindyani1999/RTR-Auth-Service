import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin
router.post("/login", loginAdmin);

export default router;
