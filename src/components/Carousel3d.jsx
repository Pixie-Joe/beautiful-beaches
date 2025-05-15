import React, { useEffect, useRef } from 'react';
import slideImg1 from "../assets/Images/North.webp";
import slideImg2 from "../assets/Images/South.webp";
import slideImg3 from "../assets/Images/East.jpg";
import slideImg4 from "../assets/Images/West.jpg";
import slideImg5 from "../assets/Images/favicon.png";
import { Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TrackVisibility from 'react-on-screen'; // Detect if the component is in view
import '../App.css';

// 3D Carousel Component
const Carousel3d = () => {
  const carouselRef = useRef(null); // Ref to access carousel DOM

  // Initialize AOS (Animate On Scroll) for animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Rotate the carousel every 4 seconds using CSS transforms
  useEffect(() => {
    const slides = carouselRef.current.querySelectorAll('.slide');
    let angle = 0;

    // Function to rotate the carousel slides
    const rotateSlides = () => {
      angle += 90; // Rotate 90 degrees on each interval
      slides.forEach((slide, index) => {
        slide.style.transform = `rotateY(${index * 90 + angle}deg) translateZ(300px)`;
      });
    };

    rotateSlides(); // Initial rotation
    const interval = setInterval(rotateSlides, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Col xs={12} md={8} lg={6} className="mx-auto">
      {/* Only animate if visible on screen */}
      <TrackVisibility>
        <div data-aos="zoom-out" className="carousel3d" ref={carouselRef}>
          <div className="carousel-wrapper">
            {/* Each slide represents a region */}
            <div className="slide"><img src={slideImg1} alt="Slide 1" /></div>
            <div className="slide"><img src={slideImg2} alt="Slide 2" /></div>
            <div className="slide"><img src={slideImg3} alt="Slide 3" /></div>
            <div className="slide"><img src={slideImg4} alt="Slide 4" /></div>

            {/* Center image (optional focal point) */}
            <div className="center-img"><img src={slideImg5} alt="Center Slide" /></div>
          </div>
        </div>
      </TrackVisibility>
    </Col>
  );
};

export default Carousel3d;
