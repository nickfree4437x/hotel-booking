import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dining from './dining.jpg';
import meeting from './meeting.jpg';
import pool from './pool.jpg';
import fitness from './fitness.jpg';
import banquet from './banquet.jpg'; 

const amenities = [
  {
    id: 1,
    title: "Luxury Swimming Pool",
    description: "Relax and unwind in our premium swimming pool with a scenic view.",
    image: pool,
  },
  {
    id: 2,
    title: "Fine Dining Experience",
    description: "Enjoy world-class dining with multiple cuisines and elegant ambiance.",
    image: dining,
  },
  {
    id: 3,
    title: "Modern Fitness Center",
    description: "Stay fit with our high-end gym and professional trainers.",
    image: fitness,
  },
  {
    id: 4,
    title: "Conference & Meeting Rooms",
    description: "Host your business meetings in our well-equipped conference halls.",
    image: meeting,
  },
  {
    id: 5,
    title: "Banquet & Event Hall",
    description: "Perfect venue for weddings, parties, and corporate events.",
    image: banquet,
  },
];

const Amenities = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-600 text-center mb-4">
           Explore Our Luxury Amenities 🏨✨
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-6 max-w-4xl mx-auto">
          Explore our luxury amenities designed for your comfort and relaxation. Enjoy world-class facilities, from fine dining to rejuvenating spa treatments.
        </p>


        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full"
        >
          {amenities.map((amenity) => (
            <SwiperSlide key={amenity.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left Side - Image */}
                <div className="w-full h-[400px]">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-full p-6">
                  <h3 className="text-3xl font-semibold text-gray-300 dark:text-gray-600 mb-4">
                    {amenity.title}
                  </h3>
                  <p className="text-lg text-gray-300 dark:text-gray-600">{amenity.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Amenities;
