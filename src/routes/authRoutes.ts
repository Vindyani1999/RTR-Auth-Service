import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAllAdmins,
} from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/admins", getAllAdmins); // Endpoint to get all admins

export default router;
