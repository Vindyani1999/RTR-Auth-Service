import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAllAdmins,
  getLoggedInAdmin,
  updateLoggedInAdmin,
  updateAdminDetails,
  deleteAdmin,
} from "../controllers/authController";

const router = express.Router();

router.post("/create", registerAdmin); // Endpoint to add new admin
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/admins", getAllAdmins);
router.get("/profile", authMiddleware, getLoggedInAdmin);
router.put("/profile", authMiddleware, updateLoggedInAdmin);
router.put("/admins/:id", authMiddleware, updateAdminDetails);
router.delete("/admins/:id", authMiddleware, deleteAdmin);

export default router;
