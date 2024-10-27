import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin, { IAdmin } from "../models/Admin";
import { generateToken } from "../utils/genarateToken";

class AuthService {
  async registerAdmin(adminData: Partial<IAdmin>) {
    const { firstName, lastName, email, password, role, phoneNumber } =
      adminData;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password as string, 10);

    // Create a new Admin with the admin role
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "admin",
      phoneNumber,
    });

    return await newAdmin.save();
  }

  async loginAdmin(email: string, password: string): Promise<string | null> {
    const admin = await Admin.findOne({ email });
    if (!admin) return null;

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return null;

    // Generate and return JWT token
    return generateToken(admin.id);
  }

  async logout() {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token if needed
        },
      });

      if (response.ok) {
        localStorage.removeItem("token"); // Remove the token from local storage
        console.log("Logout successful");
        // Redirect to login page or update the UI accordingly
        window.location.href = "/login"; // Example redirect
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
}

export default AuthService;
