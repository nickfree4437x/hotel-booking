import React from "react";
import { FaBed, FaHome, FaSwimmingPool, FaMapMarkerAlt, FaUserTie, FaWind, FaSpa, FaDumbbell } from "react-icons/fa"; // Icons for each section

const About = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column - Heading & Longer Description */}
          <div className="text-center md:text-left mt-6">
            <h2 className="text-4xl font-extrabold text-teal-600 dark:text-teal-500 mb-4">
              About Royal Vista
            </h2>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify">
              Welcome to Royal Vista, a place where luxury meets comfort. 
              Nestled in the heart of the city, our hotel offers breathtaking ocean views, world-class amenities, and personalized services to make your stay unforgettable.
              Whether you're here for business or leisure, Royal Vista is designed to provide you with exceptional hospitality.  
              Our elegant rooms, delicious cuisines, and relaxing spa treatments ensure a peaceful retreat. Enjoy exciting activities like kite surfing, yoga, and diving camps while indulging in pure relaxation.
            </p>
          </div>

          {/* Middle Column - Rooms & Facilities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700 mb-4">Facilities & Stay</h3>
            <div className="space-y-4">
              {[
                { icon: <FaBed />, title: "Luxury Rooms", desc: "Comfortable rooms with beautiful interiors." },
                { icon: <FaHome />, title: "Bungalows", desc: "Private bungalows with ocean views." },
                { icon: <FaMapMarkerAlt />, title: "Hotel Area", desc: "Spread over a wide luxurious area." },
                { icon: <FaSwimmingPool />, title: "Swimming Pool", desc: "Relax in our infinity pool with bar service." },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800 dark:bg-white shadow-md transition-transform">
                  <div className="text-teal-500 text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 dark:text-gray-600">{item.title}</h4>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Activities & Experiences */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-600 mb-4">Activities & Experiences</h3>
            <div className="space-y-4">
              {[
                { icon: <FaUserTie />, title: "Hosting Staff", desc: "Professional staff at your service." },
                { icon: <FaWind />, title: "Kite Surfing", desc: "Enjoy exciting kite surfing activities." },
                { icon: <FaSpa />, title: "Yoga Sessions", desc: "Relax with professional yoga trainers." },
                { icon: <FaDumbbell />, title: "Diving Camp", desc: "Explore the deep blue with certified divers." },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800 dark:bg-white shadow-md transition-transform">
                  <div className="text-teal-500 text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 dark:text-gray-600">{item.title}</h4>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
