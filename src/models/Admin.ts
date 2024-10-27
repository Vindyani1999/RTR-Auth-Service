import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string; // Could be better defined as a union type for stricter type safety
  phoneNumber: string;
}

const AdminSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "staff", "manager"], required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAdmin>("Admin", AdminSchema);
