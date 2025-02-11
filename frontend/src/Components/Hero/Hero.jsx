import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-scroll";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const images = [image_1, image_2, image_3, image_4];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${destination}, ${checkInDate} to ${checkOutDate}, Guests: ${guests}, Rooms: ${rooms}`);
  };

  return (
    <section className="relative w-full h-[90vh] mt-16">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hotel Royal Vista</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Experience luxury, comfort, and convenience at Royal Vista Hotel, your perfect destination for unforgettable stays.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex gap-6">
        <Link
          to="booking"
          smooth={true}
          duration={800}
          offset={-70} // Navbar ke fixed hone par adjust karega
          className="bg-teal-500 text-white px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-teal-600 hover:scale-105 dark:hover:scale-105 transition duration-300"
        >
          Book Now
        </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70} // Navbar ke fixed hone par adjust karega
            className="bg-transparent cursor-pointer border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 dark:hover:scale-105 transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
