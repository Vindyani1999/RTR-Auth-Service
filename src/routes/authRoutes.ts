import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAllAdmins,
  getLoggedInAdmin,
} from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/admins", getAllAdmins);
router.get("/profile", authMiddleware, getLoggedInAdmin);

export default router;
