import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin); // Endpoint for logging out

export default router;
