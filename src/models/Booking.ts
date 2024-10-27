import mongoose, { Schema, Document } from "mongoose";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface Booking extends Document {
  tableNumber: number;
  tableType: string;
  tablePrice: number;
  numberOfChairs: number;
  stableStatus: string; // 'Available' or 'Seated'
  date: Date;
  startTime: Date;
  endTime: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  numberOfPeople: number;
  address: string;
  cartItems: CartItem[];
  isConfirmed: boolean;
}

const BookingSchema: Schema = new Schema({
  tableNumber: { type: Number, required: true },
  tableType: { type: String, required: true },
  tablePrice: { type: Number, required: true },
  numberOfChairs: { type: Number, required: true },
  stableStatus: { type: String, default: "Available" },
  date: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  address: { type: String, required: true },
  cartItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  isConfirmed: { type: Boolean, default: false },
});

export default mongoose.model<Booking>("Booking", BookingSchema);
