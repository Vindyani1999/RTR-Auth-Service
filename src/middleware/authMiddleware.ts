import { Request, Response, NextFunction } from "express";

// Extend the Request interface to include the admin property
declare module "express-serve-static-core" {
  interface Request {
    admin?: any;
  }
}
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access Denied" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.admin = decoded;
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
