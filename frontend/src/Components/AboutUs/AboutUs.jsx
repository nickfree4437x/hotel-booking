import React from "react";
import { FaBed, FaHome, FaSwimmingPool, FaMapMarkerAlt, FaUserTie, FaWind, FaSpa, FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const facilities = [
    { icon: <FaBed className="text-2xl" />, title: "Luxury Rooms", desc: "Elegant rooms with premium amenities and stunning views" },
    { icon: <FaHome className="text-2xl" />, title: "Private Villas", desc: "Exclusive bungalows with private pools and ocean views" },
    { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Prime Location", desc: "10-acre luxury property in the heart of the city" },
    { icon: <FaSwimmingPool className="text-2xl" />, title: "Infinity Pool", desc: "100ft pool with swim-up bar and sunset views" }
  ];

  const activities = [
    { icon: <FaUserTie className="text-2xl" />, title: "Concierge Service", desc: "24/7 personalized assistance for all your needs" },
    { icon: <FaWind className="text-2xl" />, title: "Water Sports", desc: "Kite surfing, jet skiing, and paddle boarding" },
    { icon: <FaSpa className="text-2xl" />, title: "Wellness Retreat", desc: "Daily yoga, meditation, and spa treatments" },
    { icon: <FaDumbbell className="text-2xl" />, title: "Adventure Camp", desc: "Scuba diving, snorkeling, and island tours" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Left Column - Heading & Description */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-400 dark:text-teal-600 mb-6">
                Discover <span className="text-white dark:text-gray-900">Royal Vista</span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-teal-500"></div>
            </div>
            
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-lg">
              Welcome to Royal Vista, where luxury meets unparalleled hospitality. 
              Our award-winning resort combines breathtaking ocean views with world-class amenities 
              to create unforgettable experiences for every guest.
            </p>
            
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-lg">
              Whether you're here for business or leisure, our elegant accommodations, 
              gourmet dining, and rejuvenating spa ensure a perfect stay. 
              Explore exciting water sports or simply unwind by our infinity pool 
              with a signature cocktail in hand.
            </p>
            
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>

          {/* Middle Column - Facilities */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-teal-400 mr-4"></span>
              Our Facilities
            </h3>
            
            <div className="space-y-5">
              {facilities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start p-6 rounded-xl bg-gray-800 dark:bg-white shadow-md cursor-default"
                >
                  <div className="p-3 mr-4 rounded-full bg-teal-500/10 text-teal-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white dark:text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 dark:text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Activities */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-teal-400 mr-4"></span>
              Experiences
            </h3>
            
            <div className="space-y-5">
              {activities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start p-6 rounded-xl bg-gray-800 dark:bg-white shadow-md cursor-default"
                >
                  <div className="p-3 mr-4 rounded-full bg-teal-500/10 text-teal-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white dark:text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 dark:text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;