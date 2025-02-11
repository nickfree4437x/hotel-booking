import React, { useState, useEffect } from "react";
import { FaClock, FaTag } from "react-icons/fa"; // Icons for UI
import { Link } from "react-scroll";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import image_5 from './image_5.jpg';
import image_6 from './image_6.jpg';

const offers = [
  {
    id: 1,
    title: "Luxury Suite - 30% Off",
    description: "Book now and enjoy 30% discount on our luxury suites!",
    image: image_1,
    expiry: "2025-02-10T23:59:59",
  },
  {
    id: 2,
    title: "Couple Package - 40% Off",
    description: "A special romantic getaway for couples with a huge discount.",
    image: image_2,
    expiry: "2025-02-12T23:59:59",
  },
  {
    id: 3,
    title: "Weekend Deal - 50% Off",
    description: "Stay this weekend and get a massive 50% discount!",
    image: image_3,
    expiry: "2025-02-15T23:59:59",
  },
  {
    id: 4,
    title: "Family Stay - 35% Off",
    description: "Perfect family getaway with free meals & extra discounts.",
    image: image_4,
    expiry: "2025-02-20T23:59:59",
  },
  {
    id: 5,
    title: "Business Package - 25% Off",
    description: "Book for business trips with conference rooms & free breakfast.",
    image: image_5,
    expiry: "2025-02-18T23:59:59",
  },
  {
    id: 6,
    title: "Honeymoon Special - 45% Off",
    description: "Book your honeymoon package with exclusive benefits.",
    image: image_6,
    expiry: "2025-02-22T23:59:59",
  },
];

const SpecialOffers = () => {
  const [timers, setTimers] = useState({});

  // Function to update countdown timers
  const updateTimers = () => {
    const newTimers = {};
    offers.forEach((offer) => {
      const timeLeft = new Date(offer.expiry) - new Date();
      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        newTimers[offer.id] = `${days}d ${hours}h ${minutes}m`;
      } else {
        newTimers[offer.id] = "Expired";
      }
    });
    setTimers(newTimers);
  };

  useEffect(() => {
    updateTimers(); // Initial update
    const interval = setInterval(updateTimers, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-800 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-500 dark:text-teal-600 text-center mb-4">
          Special Offers & Discounts 💰
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-6 max-w-3xl mx-auto">
          Grab these limited-time special offers and discounts on your favorite luxury stays. 
          Book now and save big on exclusive deals!
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative group flex flex-col md:flex-row items-center bg-gray-900 dark:bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2 h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                {/* Discount Tag */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <FaTag />
                  <span>Limited Offer</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-300 dark:text-gray-600">{offer.title}</h3>
                <p className="text-gray-300 dark:text-gray-600 mt-2">{offer.description}</p>

                {/* Countdown Timer */}
                <div className="mt-4 flex items-center gap-2 text-lg font-semibold text-red-500 animate-pulse">
                  <FaClock />
                  <span>{timers[offer.id] || "Loading..."}</span>
                </div>

                {/* Book Now Button */}
                <Link
                  to="booking"
                  smooth={true}
                  duration={500}
                  className="mt-4 bg-teal-500 px-6 py-2 cursor-pointer text-center rounded-lg text-white font-semibold hover:bg-teal-600 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
