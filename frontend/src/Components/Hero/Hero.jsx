import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-scroll";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import { motion } from "framer-motion";

const Hero = () => {
  const images = [image_1, image_2, image_3, image_4];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.7
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative w-full h-screen max-h-[1000px] min-h-[600px]">
      {/* Swiper Background with Fade Effect */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        speed={1500}
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4 sm:px-6">
        <motion.div
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-teal-400">Hotel</span> Royal Vista
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed"
            variants={itemVariants}
          >
            Experience luxury, comfort, and convenience at our exquisite hotel - your perfect destination for unforgettable stays.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="booking"
              smooth={true}
              duration={800}
              offset={-70}
            >
              <motion.button
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-teal-500/30"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Book Now
              </motion.button>
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <motion.button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scrolling Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;