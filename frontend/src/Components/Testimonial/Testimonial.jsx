import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import image_5 from './image_5.jpg';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: image_1, // Replace with actual image URL
    rating: 5,
    review: "Amazing hotel experience! The rooms were clean, and the staff was super friendly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: image_2,
    rating: 4,
    review: "Had a wonderful stay! The breakfast was delicious, and the location was perfect.",
  },
  {
    id: 3,
    name: "Mark Wilson",
    image: image_3,
    rating: 5,
    review: "The best hotel I've ever stayed at! Highly recommend their luxury suites.",
  },
  {
    id: 4,
    name: "Alice Brown",
    image: image_4,
    rating: 4,
    review: "Great service and beautiful views from the hotel rooms. Would visit again!",
  },
  {
    id: 5,
    name: "David Lee",
    image: image_5,
    rating: 5,
    review: "Loved the pool and spa facilities. Perfect place to relax on a vacation.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-50 text-center duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-600 mb-6">
          What Our Guests Say ✨
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-8">
          Read real reviews from our happy customers!
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-700 dark:bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                {/* Customer Image */}
                <div className="flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-teal-500"
                  />
                </div>

                {/* Review Content */}
                <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-600">{testimonial.name}</h3>
                
                {/* Star Ratings */}
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`text-lg ${index < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 dark:text-gray-600 mt-4">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
