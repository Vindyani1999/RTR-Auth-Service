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
    res.status(500).json({ error: "Failed to register admin" });
  }
};
