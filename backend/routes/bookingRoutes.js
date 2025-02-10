import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// ✅ POST: Save Booking Data
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking Confirmed!", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Error saving booking!", error });
  }
});

// ✅ GET: Fetch All Bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings!", error });
  }
});

export default router;
