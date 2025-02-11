import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { BiSearch } from "react-icons/bi"; // Search Icon
import hotelLogo from "./logo.png"; // Import your logo

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search Input State
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Apply dark class to the document when dark mode is enabled
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Search Submission
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <nav className="bg-gray-800 dark:bg-white shadow-md fixed top-0 w-full z-30 transition-all duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo + Hotel Name */}
        <div className="flex items-center space-x-3">
          <img src={hotelLogo} alt="Hotel Logo" className="w-12 h-12 object-contain cursor-pointer rounded-lg" /> 
          <span className="text-3xl text-teal-600 font-extrabold cursor-pointer dark:text-teal-600">
            Royal Vista
          </span>
        </div>

        {/* Search Bar (Desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-700 dark:bg-white px-3 py-1 rounded-full border border-gray-600 dark:border-gray-300 focus-within:ring-2 focus-within:ring-teal-500 transition-all w-72 z-30 duration-1000">
          <input
            type="text"
            placeholder="Search hotels, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none bg-transparent text-white dark:text-gray-700 px-2"
          />
          <button type="submit">
            <BiSearch className="text-white dark:text-gray-500" size={20} />
          </button>
        </form>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 relative z-30">
          {["Home", "About", "Rooms", "Facilities"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-200 dark:text-gray-600 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
            >
              {item}
            </Link>
          ))}

          {/* Dropdown Services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-200 hover:text-teal-600 dark:hover:text-teal-600 dark:hover:underline dark:text-gray-600 hover:underline transition cursor-pointer"
            >
              Services ▼
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-600 dark:bg-white shadow-lg rounded-lg py-2 z-50">
              {[
                { name: "Hotel Booking", id: "hotel-booking" },
                { name: "Room Cleaning", id: "room-cleaning" },
                { name: "Luxury Suites", id: "room-cleaning" },
                { name: "Travel Assistance", id: "room-cleaning" },
              ].map((service) => (
                <Link
                  key={service.id}
                  to={service.id} // ID of the section
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjusts for fixed navbar
                  className="block px-4 py-2 text-gray-100 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
          </div>
        </div>

        {/* Right-Side Buttons */}
        <div className="flex items-center space-x-4 z-30">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 focus:outline-none duration-1000"
          >
            {darkMode ? (
              <FiSun className="text-yellow-500" size={20} />
            ) : (
              <FiMoon className="text-gray-100" size={20} />
            )}
          </button>

          {/* Book Now Button */}
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 dark:hover:from-green-500 dark:hover:to-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-md"
          >
            Book Now
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-200 dark:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-100 p-4 space-y-2 duration-1000 z-40">
          {/* Search Bar (Mobile) */}
          <form onSubmit={handleSearch} className="flex items-center bg-gray-700 dark:bg-white px-3 py-2 rounded-md border border-gray-600 dark:border-gray-300">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none bg-transparent text-white dark:text-gray-700 px-2"
            />
            <button type="submit">
              <BiSearch className="text-white dark:text-gray-500" size={20} />
            </button>
          </form>

          {["Home", "About", "Rooms", "Facilities"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-gray-200 dark:text-gray-600 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Book Now Button */}
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="block text-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
