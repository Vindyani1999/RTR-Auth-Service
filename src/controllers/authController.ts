// import { Request, Response } from 'express';
// import authService from "../services/authService";

// export const register = async (req: Request, res: Response) => {
//   try {
//     const user = await authService.registerUser(req.body);
//     return res.status(201).json(user);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const token = await authService.loginUser(req.body);
//     return res.status(200).json({ token });
//   } catch (error) {
//     return res.status(401).json({ message: error.message });
//   }
// };
