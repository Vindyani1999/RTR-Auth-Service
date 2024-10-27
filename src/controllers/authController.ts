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
