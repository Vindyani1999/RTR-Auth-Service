import { Request, Response } from "express";
import tableService from "../services/tableService";

export const bookTable = async (req: Request, res: Response) => {
  try {
    // Check table availability based on the time slot
    const isAvailable = await tableService.checkAvailability(
      req.body.tableNumber,
      req.body.startTime,
      req.body.endTime
    );
    if (!isAvailable) {
      return res
        .status(400)
        .json({ message: "Table is not available for this time slot" });
    }

    // Proceed with booking the table
    const booking = await tableService.bookTable(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
