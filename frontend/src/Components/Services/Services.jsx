import React, { useState } from "react";
import { FaHotel, FaBroom, FaCrown, FaPlane } from "react-icons/fa"; // Icons
import hotelImg from "./hotel.jpg";
import cleaningImg from "./house.jpg";
import luxuryImg from "./five-star.jpg";
import travelImg from "./dest.jpg";

const allServices = [
  {
    category: "Hotel Booking",
    services: [
      { title: "Instant Booking", description: "Book hotels instantly at the best price.", icon: <FaHotel className="text-5xl text-white" />, image: hotelImg },
      { title: "Flexible Pricing", description: "Choose flexible pricing and cancellation policies.", icon: <FaHotel className="text-5xl text-white" />, image: hotelImg },
    ],
  },
  {
    category: "Room Cleaning",
    services: [
      { title: "Daily Housekeeping", description: "Professional cleaning services every day.", icon: <FaBroom className="text-5xl text-white" />, image: cleaningImg },
      { title: "Deep Cleaning", description: "Thorough deep cleaning after every checkout.", icon: <FaBroom className="text-5xl text-white" />, image: cleaningImg },
    ],
  },
  {
    category: "Luxury Suites",
    services: [
      { title: "Executive Suites", description: "Spacious suites with premium interiors.", icon: <FaCrown className="text-5xl text-white" />, image: luxuryImg },
      { title: "Ocean View Suites", description: "Relax with breathtaking ocean views.", icon: <FaCrown className="text-5xl text-white" />, image: luxuryImg },
    ],
  },
  {
    category: "Travel Assistance",
    services: [
      { title: "Trip Planning", description: "Plan your travel with expert assistance.", icon: <FaPlane className="text-5xl text-white" />, image: travelImg },
      { title: "Airport Pickup", description: "Luxury airport pickup and drop services.", icon: <FaPlane className="text-5xl text-white" />, image: travelImg },
    ],
  },
];

const categories = ["All", "Hotel Booking", "Room Cleaning", "Luxury Suites", "Travel Assistance"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "All"
      ? allServices.flatMap((service) => service.services)
      : allServices.find((service) => service.category === selectedCategory)?.services || [];

  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-500 dark:text-teal-600 text-center mb-4">
          Our Exclusive Services
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-6 max-w-3xl mx-auto">
          Discover a range of exclusive services designed to enhance your stay. From seamless hotel bookings to premium concierge services, we ensure a luxurious experience.
        </p>


        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-md font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-teal-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" id="room-cleaning">
          {filteredServices.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-gray-200 max-w-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
