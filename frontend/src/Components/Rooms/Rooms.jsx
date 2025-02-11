import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Rating Icon
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-scroll'
import { Navigation, Pagination } from "swiper/modules"; // Import modules
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import image_5 from './image_5.jpg';
import image_6 from './image_6.jpg';
import image_7 from './image_7.jpg';
import image_8 from './image_8.jpg';
import image_9 from './image_9.jpg';
import image_10 from './image_10.jpg';
import image_11 from './image_11.jpg';
import image_12 from './image_12.jpg';
import image_13 from './image_13.jpg';
import image_14 from './image_14.jpg';
import image_15 from './image_15.jpg';
import image_16 from './image_16.jpg';
import image_17 from './image_17.jpg';
import image_18 from './image_18.jpg';
import image_19 from './image_19.jpg';
import image_20 from './image_20.jpg';
import image_21 from './image_21.jpg';
import image_22 from './image_22.jpg';
import image_23 from './image_23.jpg';
import image_24 from './image_24.jpg';
import image_25 from './image_25.jpg';
import image_26 from './image_26.jpg';
import image_27 from './image_27.jpg';
import image_28 from './image_28.jpg';
import image_29 from './image_29.jpg';
import image_30 from './image_30.jpg';
import image_31 from './image_31.jpg';
import image_32 from './image_32.jpg';
import image_33 from './image_33.jpg';

const Rooms = () => {
  // State for filter options
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [roomType, setRoomType] = useState("All");
  const [sortBy, setSortBy] = useState("Price");

  // Sample rooms data with multiple images for each room (15 rooms)
  const roomsData = [
    {
      id: 1,
      name: "Standard Room",
      price: 100,
      rating: 4.2,
      category: "Standard",
      images: [
        image_1,
        image_2,
        image_3
      ]
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 200,
      rating: 4.5,
      category: "Deluxe",
      images: [
        image_4,
        image_5,
        image_6
      ]
    },
    {
      id: 3,
      name: "Luxury Suite",
      price: 400,
      rating: 5.0,
      category: "Luxury",
      images: [
        image_7,
        image_8,
        image_9
      ]
    },
    {
      id: 4,
      name: "Family Room",
      price: 150,
      rating: 4.3,
      category: "Family",
      images: [
        image_10,
        image_11,
        image_12
      ]
    },
    {
      id: 5,
      name: "King Suite",
      price: 350,
      rating: 4.7,
      category: "Suite",
      images: [
        image_13,
        image_14,
        image_15
      ]
    },
    {
      id: 6,
      name: "Garden Room",
      price: 120,
      rating: 4.0,
      category: "Standard",
      images: [
        image_16,
        image_17,
        image_18
      ]
    },
    {
      id: 7,
      name: "Poolside Room",
      price: 180,
      rating: 4.1,
      category: "Deluxe",
      images: [
        image_19,
        image_20,
        image_21
      ]
    },
    {
      id: 8,
      name: "Penthouse Suite",
      price: 600,
      rating: 5.0,
      category: "Luxury",
      images: [
        image_22,
        image_23,
        image_24
      ]
    },
    {
      id: 9,
      name: "Ocean View Room",
      price: 200,
      rating: 4.3,
      category: "Standard",
      images: [
        image_25,
        image_26,
        image_27
      ]
    },
    {
      id: 10,
      name: "Superior Suite",
      price: 350,
      rating: 4.6,
      category: "Suite",
      images: [
        image_28,
        image_29,
        image_30
      ]
    },
    {
      id: 11,
      name: "Presidential Suite",
      price: 800,
      rating: 5.0,
      category: "Luxury",
      images: [
        image_31,
        image_32,
        image_33
      ]
    },
  ];

  // Filter and Sort Rooms based on selected options
  const filteredRooms = roomsData.filter((room) => {
    return (
      room.price >= priceRange[0] &&
      room.price <= priceRange[1] &&
      (roomType === "All" || room.category === roomType)
    );
  });

  const sortedRooms = filteredRooms.sort((a, b) => {
    if (sortBy === "Price") {
      return a.price - b.price;
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <section className="py-16 bg-gray-800 dark:bg-gray-50 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-teal-600 dark:text-teal-600 mb-4">
          Rooms
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-4 max-w-4xl mx-auto">
          Our elegantly designed rooms offer the perfect blend of comfort, style, and convenience. Whether you choose a cozy standard room or a spacious deluxe suite.
        </p>


        {/* Filters */}
        <div className="mb-8">
          <label className="mr-4 text-lg text-white dark:text-gray-800">
            Price Range
          </label>
          <input
            type="range"
            min="50"
            max="800"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
            className="w-1/2"
          />
          <input
            type="range"
            min="50"
            max="800"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            className="w-1/2"
          />
          <div className="text-sm text-gray-400 dark:text-gray-600">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        <div className="mb-8">
          <label className="mr-4 text-lg text-white dark:text-gray-800">
            Room Type
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Luxury">Luxury</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="mr-4 text-lg text-white dark:text-gray-800">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
          </select>
        </div>

        {/* Rooms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRooms.map((room) => (
            <div
              key={room.id}
              className="bg-gray-700 dark:bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:bg-teal-500 hover:text-gray-200 text-white dark:text-gray-600 dark:hover:text-gray-100"
            >
              {/* Swiper for Room Images */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-48 mb-4"
              >
                {room.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${room.name} - ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3 className="text-2xl font-semibold">{room.name}</h3>
              <div className="flex items-center justify-center text-yellow-400 my-2">
                <FaStar className="mr-2" />
                <span>{room.rating}</span>
              </div>
              <p className="text-gray-300 dark:text-gray-700 mb-4">
                ${room.price} / night
              </p>
              <Link
                to="booking"
                smooth={true}
                duration={500}
                className="mt-4 px-6 py-2 cursor-pointer bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-all">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
