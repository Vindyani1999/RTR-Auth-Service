import Table from "../models/table";
import Booking from "../models/Booking";
import { ObjectId } from "mongodb";

const bookTable = async (bookingData: any) => {
  const {
    tableNumber,
    tableType,
    tablePrice,
    numberOfChairs,
    stableStatus,
    date,
    startTime,
    endTime,
    firstName,
    lastName,
    phoneNumber,
    numberOfPeople,
    address,
    cartItems,
  } = bookingData;

  // Create a new booking with all the details
  const booking = new Booking({
    tableNumber,
    tableType,
    tablePrice,
    numberOfChairs,
    stableStatus: "Seated", // Mark as seated initially
    date,
    startTime,
    endTime,
    firstName,
    lastName,
    phoneNumber,
    numberOfPeople,
    address,
    cartItems,
    isConfirmed: false,
  });

  await booking.save();

  // Update the table's status to 'Seated'
  const table = await Table.findOne({ tableNumber });
  if (table) {
    table.status = "Seated";
    table.bookings.push(booking._id as ObjectId); // Add the booking to the table
    await table.save();

    // If the booking is not confirmed within 2 minutes, set the table back to 'Available'
    setTimeout(async () => {
      const refreshedBooking = await Booking.findById(booking._id);
      if (!refreshedBooking?.isConfirmed) {
        table.status = "Available";
        await table.save();
        await Booking.findByIdAndDelete(booking._id); // Remove unconfirmed booking
      }
    }, 2 * 60 * 1000); // 2 minutes

    return booking;
  } else {
    throw new Error("Table not found");
  }
};

const confirmBooking = async (bookingId: string) => {
  const booking = await Booking.findById(bookingId);
  if (!booking) throw new Error("Booking not found");

  booking.isConfirmed = true;
  await booking.save();

  const table = await Table.findOne({ tableNumber: booking.tableNumber });
  if (table) {
    table.status = "Seated"; // Keep table seated until endTime
    await table.save();
  }

  return booking;
};

const checkAvailability = async (
  tableNumber: number,
  date: string,
  startTime: string,
  endTime: string
) => {
  const table = await Table.findOne({ tableNumber });
  if (!table) throw new Error("Table not found");

  const conflictingBookings = await Booking.find({
    tableNumber,
    date,
    $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }],
  });

  return conflictingBookings.length === 0;
};

export default { bookTable, confirmBooking, checkAvailability };
