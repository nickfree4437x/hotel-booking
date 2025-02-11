import React from "react";
import { FaBed, FaWifi, FaConciergeBell, FaParking, FaUtensils, FaSpa } from "react-icons/fa"; // Icons for facilities
import room from './image_4.jpg';
import wi_fi from './wi-fi.jpg';
import recep from './recep.jpg';
import parking from './parking.jpg';
import cafe from './caf.jpg';
import spa from './spa.jpg';

const facilities = [
  {
    icon: <FaBed className="text-5xl text-teal-500" />,
    title: "Luxury Rooms",
    description: "Spacious & elegantly designed rooms with top-class amenities.",
    image: room,
  },
  {
    icon: <FaWifi className="text-5xl text-teal-500" />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with free high-speed internet across the hotel.",
    image: wi_fi,
  },
  {
    icon: <FaConciergeBell className="text-5xl text-teal-500" />,
    title: "24/7 Concierge",
    description: "Our dedicated concierge service is available round the clock.",
    image: recep,
  },
  {
    icon: <FaParking className="text-5xl text-teal-500" />,
    title: "Secure Parking",
    description: "Free and secure 24/7 monitored parking facility available.",
    image: parking,
  },
  {
    icon: <FaUtensils className="text-5xl text-teal-500" />,
    title: "In-House Restaurant & Bar",
    description: "Enjoy gourmet meals & premium drinks at our restaurant & bar.",
    image: cafe,
  },
  {
    icon: <FaSpa className="text-5xl text-teal-500" />,
    title: "Spa & Wellness Center",
    description: "Relax with professional spa & wellness services.",
    image: spa,
  },
];

const Facilities = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-500 dark:text-teal-600 text-center mb-5">
          Our Exclusive Facilities
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-6 max-w-3xl mx-auto">
          Experience world-class facilities designed for your comfort and convenience. From fine dining to wellness centers, we provide everything for a perfect stay.
        </p>


        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {facilities.map((facility, index) => (
            <div key={index} className="relative group flex flex-col md:flex-row items-center md:items-start">
              
              {/* Facility Image */}
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Facility Info */}
              <div className="w-full md:w-1/2 text-center md:text-left p-6 bg-gray-800 dark:bg-white rounded-lg shadow-md transition-all duration-1000 
                md:ml-6 lg:ml-1 lg:mt-5"> {/* Increased spacing only in desktop */}
                <div className="flex justify-center md:justify-start mb-4">{facility.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-600">
                  {facility.title}
                </h3>
                <p className="mt-3 text-gray-300 dark:text-gray-600">{facility.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
