import { Request, Response } from "express";
import AuthService from "../services/authService";

const authService = new AuthService();

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const newUser = await authService.registerAdmin(req.body);
    res
      .status(201)
      .json({ message: "Admin registered successfully", user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginAdmin(email, password);

    if (token) {
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const logoutAdmin = (req: Request, res: Response) => {
  // Invalidate the token on the client side
  res.status(200).json({ message: "Logout successful" });
};

export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const users = await authService.getAllAdmins();
    res.status(200).json({ message: "Users retrieved successfully", users });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const getLoggedInAdmin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const adminId = req.admin?.id; // Assuming `req.admin` was set by `authMiddleware`
    if (!adminId) {
      res.status(400).json({ message: "Admin ID not found in request" });
    }

    const adminDetails = await authService.getAdminById(adminId);
    if (!adminDetails) {
      res.status(404).json({ message: "Admin not found" });
    }

    res
      .status(200)
      .json({
        message: "Admin details retrieved successfully",
        admin: adminDetails,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};
