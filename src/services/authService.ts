import bcrypt from "bcrypt";
import Admin, { IAdmin } from "../models/Admin";

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
}

export default AuthService;
