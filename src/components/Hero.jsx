import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCircleArrowRight } from 'react-icons/fa6';
import video1 from '../assets/Video/Full video (compres).mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingPage from './BookNow';

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  const phrases = ['Vacation', 'Relaxation', 'Adventure', 'Luxury'];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[index]);
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      {/* Booking Modal Popup */}
      {showBooking && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button className="close-modal btn btn-dark btn-sm position-absolute top-0 end-0 m-3"
             onClick={() => setShowBooking(false)}
             style={{
                zIndex: 10,
                padding: '0.5rem 0.75rem',
                borderRadius: '5rem',
                fontSize: '0.5rem'
              }}>
              <h1>X</h1>
            </button>
            <BookingPage />
          </div>
        </div>
      )}

      {/* Main Hero Section with blur effect */}
      <section className={`home ${showBooking ? 'blurred' : ''}`} id="home">
        <video src={video1} muted autoPlay loop className="hero-video" />

        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="homeContent container">
                <span className="tagline">Welcome to Beautiful Beaches</span>
                <h1>
                  Find the Best Beach and Resort For <br />
                  <span className="txt-rotate">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <button className="home-button" onClick={() => setShowBooking(true)}>
                  Book Now <FaCircleArrowRight size={25} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
