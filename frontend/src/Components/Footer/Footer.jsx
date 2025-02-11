import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-teal-500">Royal Vista</h2>
            <p className="text-gray-400 mt-3 text-justify">
              Experience world-class hospitality at <span className="text-teal-400 font-semibold">Royal Vista Hotel</span>, 
              where luxury meets comfort. Nestled in the heart of the city, our hotel offers elegant 
              rooms, fine dining, and top-tier amenities to make your stay unforgettable. 
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 ml-10">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Rooms", "Offers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 ml-16 text-center hover:text-teal-500 hover:underline transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-500" /> 123 Luxury Street, New York, USA
            </p>
            <p className="text-gray-400 flex items-center gap-2 mt-2">
              <FaPhone className="text-teal-500" /> +1 234 567 890
            </p>
            <p className="text-gray-400 flex items-center gap-2 mt-2">
              <FaEnvelope className="text-teal-500" /> contact@hotel.com
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400">Get exclusive hotel offers & travel updates!</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-teal-500 px-4 py-2 rounded-r-lg hover:bg-teal-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-teal-500 transition text-2xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold text-gray-300">Royal Vista Hotel</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
