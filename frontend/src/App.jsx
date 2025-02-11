import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Rooms from "./Components/Rooms/Rooms";
import Booking from "./Components/Booking/Booking";
import WhyChoose from "./Components/Why-choose/WhyChoose";
import Services from "./Components/Services/Services";
import Facilities from "./Components/Facilities/Facilities";
import Review from "./Components/Review/Review";
import Offer from "./Components/Offer/Offer";
import Blog from "./Components/Blog/Blog";
import Find from "./Components/Find/Find";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";
import Amenities from './Components/Amenities/Amenities';

function App() {
  return (
    <React.Fragment>
        <section>
          <Navbar/>
        </section>
        <section id="home">
          <Hero/>
        </section>
        <section id="about">
          <AboutUs/>
        </section>
        <section id="rooms">
          <Rooms/>
        </section>
        <section>
          <Amenities/>
        </section>
        <section id='booking'>
          <Booking/>
        </section>
        <section id='offer'>
          <Offer/>
        </section>
        <section id='testmonial'>
          <Testimonial/>
        </section>
        <section id='services'>
          <Services/>
        </section>
        <section id='facilities'>
          <Facilities/>
        </section>
        <section id='why-choose'>
          <WhyChoose/>
        </section>
        <section id='blog'>
          <Blog/>
        </section>
        <section id='review'>
          <Review/>
        </section>
        <section id='find'>
          <Find/>
        </section>
        <section id='footer'>
          <Footer/>
        </section>
  </React.Fragment>
  );
}

export default App;
