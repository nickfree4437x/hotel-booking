import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "Standard",
    name: "",
    email: "",
    phone: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/bookings", formData);

      if (response.status === 201) {
        // Show Success SweetAlert
        Swal.fire({
          title: "Booking Confirmed!",
          text: `Thank you, ${formData.name}. Your room is booked successfully! ✅`,
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset Form
        setFormData({
          checkIn: "",
          checkOut: "",
          guests: "1",
          roomType: "Standard",
          name: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      // Show Error SweetAlert
      Swal.fire({
        title: "Booking Failed!",
        text: "There was an issue processing your booking. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="bg-gray-800 dark:bg-gray-50 py-12 px-4 duration-1000" id="hotel-booking">
      <div className="max-w-3xl mx-auto bg-gray-700 dark:bg-white p-8 rounded-lg shadow-md duration-1000">
        <h2 className="text-3xl font-extrabold text-center text-teal-600 dark:text-teal-600 mb-6">
          Book Your Stay
        </h2>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Check-in & Check-out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="date" 
            name="checkIn" 
            value={formData.checkIn} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white dark:focus:outline-none focus:ring-teal-500 transition-all placeholder-gray-400 duration-1000" 
            onFocus={(e) => (e.target.type = "date")} 
            onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
            placeholder="Check-in Date"
          />

          <input 
            type="date" 
            name="checkOut" 
            value={formData.checkOut} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white dark:focus:outline-none focus:ring-teal-500 transition-all placeholder-gray-400 duration-1000" 
            onFocus={(e) => (e.target.type = "date")} 
            onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
            placeholder="Check-out Date"
          />
          </div>

          {/* Guests & Room Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select 
              name="guests" value={formData.guests} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white text-gray-300 dark:text-gray-500 dark:focus:outline-none focus:ring-teal-500 duration-1000">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
              ))}
            </select>

            <select name="roomType" 
              value={formData.roomType} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white text-gray-300 dark:text-gray-500 dark:focus:outline-none focus:ring-teal-500 duration-1000">
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Name, Email, Phone */}
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required placeholder="Enter your full name" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white dark:focus:outline-none focus:ring-teal-500 transition-all duration-1000" />

          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} required 
            placeholder="Enter your email" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white dark:focus:outline-none focus:ring-teal-500 transition-all duration-1000" />

          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} required 
            placeholder="Enter your phone number" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 dark:bg-white dark:focus:outline-none focus:ring-teal-500 transition-all duration-1000" />

          {/* Submit Button */}
          <button type="submit" className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-bold text-md shadow-md hover:bg-teal-600 transition-all duration-300">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
