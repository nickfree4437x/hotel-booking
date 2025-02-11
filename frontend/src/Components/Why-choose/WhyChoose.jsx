import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import room_1 from './image_1.jpg';
import room_2 from './image_2.jpg';
import fitness from './fitness.jpg';
import dining_1 from './dining_1.jpg';
import dining_2 from './dining_2.jpg';
import event_1 from './event_1.jpg';
import event_2 from './event_2.jpg';
import pool_1 from './pool_1.jpg';
import pool_2 from './pool_2.jpg';

const galleryImages = [
  { id: 1, category: "Rooms", src: room_1 },
  { id: 2, category: "Rooms", src: room_2 },
  { id: 3, category: "Pool", src: pool_1 },
  { id: 4, category: "Pool", src: pool_2 },
  { id: 5, category: "Dining", src: dining_1 },
  { id: 6, category: "Dining", src: dining_2 },
  { id: 7, category: "Gym", src: fitness },
  { id: 8, category: "Events", src: event_1 },
  { id: 9, category: "Events", src: event_2 },
];

const categories = ["All", "Rooms", "Pool", "Dining", "Gym", "Events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtered Images Based on Category
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-50 text-center duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-600 mb-6">
          Hotel Gallery 🏨📸
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-8">
          Explore our beautiful hotel spaces, luxury rooms, and top-notch facilities.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 dark:bg-gray-200 text-gray-300 dark:text-gray-600 hover:bg-teal-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Desktop Grid Gallery */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage(image.src)}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to View
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper Gallery */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={10}
            className="w-full"
          >
            {filteredImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.category}
                    className="w-full h-72 object-cover"
                    onClick={() => setSelectedImage(image.src)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lightbox for Full Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-[90%] max-h-[90%]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full"
              >
                <FaTimes size={24} />
              </button>
              <img src={selectedImage} alt="Selected" className="w-full h-auto max-h-[85vh] rounded-lg shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
