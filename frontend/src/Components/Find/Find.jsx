import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FindUs = () => {
  return (
    <section className="relative w-full h-[70vh]">
      {/* Google Map Embed */}
      <iframe
        title="Hotel Location"
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075831088!2d-74.25987568772833!3d40.69767006811713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317b462249%3A0x69d44f80c6b07dbd!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1707634558974!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Overlay Content (Small Box in Bottom-Left) */}
      <div className="absolute bottom-5 left-5 bg-gray-900 dark:bg-white p-6 rounded-lg shadow-lg max-w-xs duration-1000">
        <h2 className="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-teal-500" /> Find Us
        </h2>

        <p className="text-gray-300 dark:text-gray-600 text-sm flex items-center gap-2">
          <FaMapMarkerAlt className="text-teal-500" />
          123 Luxury Street, New York, USA
        </p>

        <p className="text-gray-300 dark:text-gray-600 text-sm flex items-center gap-2 mt-2">
          <FaPhoneAlt className="text-teal-500" />
          +1 234 567 890
        </p>

        <p className="text-gray-300 dark:text-gray-600 text-sm flex items-center gap-2 mt-2">
          <FaEnvelope className="text-teal-500" />
          contact@hotel.com
        </p>

        {/* Get Directions Button */}
        <a
          href="https://maps.google.com?q=123+Luxury+Street,+New+York,+USA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-all text-center"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default FindUs;
