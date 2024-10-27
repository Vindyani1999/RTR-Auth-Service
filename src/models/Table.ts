import mongoose, { Schema, Document } from "mongoose";

interface Table extends Document {
  type: string;
  status: string; // 'Available' or 'Seated'
  bookings: mongoose.Types.ObjectId[]; // List of bookings
}

const TableSchema: Schema = new Schema({
  type: { type: String, required: true }, // E.g., round, square
  status: { type: String, default: "Available" },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

export default mongoose.model<Table>("Table", TableSchema);
