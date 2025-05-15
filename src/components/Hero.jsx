import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import video1 from '../assets/vid/Full video (compres).mp4';
import { FaCircleArrowRight } from "react-icons/fa6";
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // Initialize AOS for animations on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  // Typing animation states
  const [loopNum, setLoopNum] = useState(0);        // Index for rotating phrases
  const [isDeleting, setIsDeleting] = useState(false); // Flag for deleting vs typing
  const [text, setText] = useState('');             // Current text displayed
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Typing speed
  const toRotate = ["Relaxation", "Creativity", "Romance"];     // Phrases to rotate through
  const period = 2000;                              // Delay between full words

  // Effect to call tick function repeatedly
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]); // Re-run when text updates

  // Typing animation logic
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    // Either add or remove one character
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Adjust speed when deleting
    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    // Transition between typing and deleting
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  };

  return (
    <section className="home" id="home">
      {/* Hero video background */}
      <video data-aos="zoom-in" src={video1} muted autoPlay loop className="hero-video" />

      {/* Container for overlay content */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="homeContent container">
                {/* Tagline with fade-in animation */}
                <span data-aos="fade-right" className="tagline">Welcome to Beautiful Beaches</span>

                {/* Animated heading */}
                <h1 data-aos="fade-left">
                  {`Find the Best Beach and Resort For `}
                  <br />
                  <span className="txt-rotate" dataPeriod="3000" data-rotate='[ "Relaxation", "Creativity", "Romance" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>

                {/* Call-to-action button */}
                <button data-aos="fade-right" className="home-button">
                  Book Now <FaCircleArrowRight size={25} />
                </button>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
