import React, { useEffect, useState } from 'react';
import img from '../assets/Images/land.avif';
import contact from '../assets/Images/website.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import call from '../assets/Images/calling.svg';
import { RiArrowRightSLine, RiArrowDownSLine } from '@remixicon/react';
import dublin from '../assets/Images/Dublin.webp';
import singapore from '../assets/Images/Singapore.webp';
import madrid from '../assets/Images/Madrid.webp';
import india from '../assets/Images/India-Office.webp';
import paris from '../assets/Images/Paris.webp';
import japan from '../assets/Images/Japan.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // State to manage accordion open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle accordion open/close state
  const toggleAccordion = () => setIsOpen(!isOpen);

  // Initialize AOS animations once on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Array of office branches to render dynamically
  const offices = [
    { img: dublin, title: 'Dublin (European HQ)', address: "1 Sir John Rogerson's Quay, Dublin 2", phone: '+353 1 518 7500' },
    { img: singapore, title: 'Singapore (Asia-Pacific HQ)', address: '60 Anson Road, Mapletree Anson', phone: '+65 6955 6000' },
    { img: madrid, title: 'Madrid', address: 'Paseo de la Castellana 91, 10th Floor, Madrid', phone: '+34 910 873 200' },
    { img: india, title: 'India', address: 'WeWork Cherry Hills, Bengaluru', phone: '000800 050 3669' },
    { img: paris, title: 'Paris', address: '91 Boulevard Haussmann, Paris', phone: '+33 1 72 73 05 00' },
    { img: japan, title: 'Tokyo', address: '4-1, Marunouchi 1-chome, Chiyoda City, Tokyo', phone: '+81 3 5656 5900' }
  ];

  return (
    <div className="container-fluid p-3">

      {/* Top Banner Section with background image and centered icon */}
      <div data-aos="zoom-in" className="position-relative mb-5">
        <img src={img} className="img-fluid w-100 rounded" alt="Banner" />
        <img
          src={contact}
          className="position-absolute top-50 start-50 translate-middle img-fluid"
          style={{ maxWidth: '100px' }}
          alt="Contact Icon"
        />
      </div>

      {/* Contact Cards Section */}
      <div className="row justify-content-center g-4">

        {/* Talk to Sales Card */}
        <div data-aos="fade-left" className="col-12 col-md-5">
          <div data-aos="fade-down" className="card border-0 shadow p-4 text-center h-100">
            <img src={call} alt="Calling" className="mb-3 align-items-center" style={{ width: '60px' }} />
            <h2 data-aos="fade-right" className="h5 fw-bold">Contact us globally</h2>
            <p>Interested in HubSpot’s software? Pick up the phone to chat with sales.</p>
            <a href="tel:+35315187500" className="d-block fw-semibold mb-2 text-decoration-none text-dark">
              +353 1 518 7500
            </a>
            <a href="#contact-numbers-section" className="text-primary text-decoration-underline fw-semibold">
              View all our Global line
            </a>
          </div>
        </div>

        {/* Contact Support Card */}
        <div data-aos="fade-right" className="col-12 col-md-5">
          <div data-aos="fade-up" className="card border-0 shadow p-4 text-center h-100">
            <div className="d-flex justify-content-center gap-3 mb-3">
              {/* Chat and comments icons */}
              <img src="https://www.hubspot.com/hubfs/Contact%20Us/chat.svg" alt="Chat" style={{ width: '50px' }} />
              <img src="https://www.hubspot.com/hubfs/Contact%20Us/comments.svg" alt="Comments" style={{ width: '50px' }} />
            </div>
            <h2 data-aos="fade-right" className="h5 fw-bold">Contact Customer Support</h2>
            <p data-aos="fade-left">Need help? We are here to help you find the best beach</p>
            <a
              data-aos="fade-right"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contact Support
            </a>
          </div>
        </div>

      </div>

      {/* Accordion Section for Location Details */}
      <div className="accordion my-5" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header" id="accordion-header">
            {/* Accordion button with toggle and icon changes based on open state */}
            <button
              className="accordion-button d-flex justify-content-center align-items-center gap-2 fw-bold"
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              aria-controls="accordion-content"
              id="accordion-header"
              data-aos="fade-up"
            >
              Where to find Us {isOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
            </button>
          </h2>

          {/* Collapsible accordion content */}
          <div
            id="accordion-content"
            role="region"
            aria-labelledby="accordion-header"
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
          >
            <div className="accordion-body">

              {/* Google Map and HQ Contact Info */}
              <div className="row">
                <div className="col-12 col-md-8 mb-3">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1600178607697!2d-71.076492!3d42.3661989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708dcdd7f72b%3A0x6a19c9890f0ed33a!2s2%20Canal%20Park%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sus!4v1714193701312!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    data-aos="zoom-in"
                  ></iframe>
                </div>
                <div className="col-12 col-md-4">
                  <h5>Global Headquarters</h5>
                  <p>2 Canal Park, Cambridge, MA 02141, USA</p>
                  <p>Phone: +1 888 HUBSPOT</p>
                  <p>Fax: +1 617 812 5820</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Other Branches Section */}
      <div className="my-5" data-aos="zoom-in">
        <h2 className="text-info text-center">OUR OTHER BRANCHES</h2>

        {/* Render office branches dynamically with alternating image/text order */}
        {offices.map(({ img, title, address, phone }, idx) => (
          <div className="row g-4 align-items-center my-4" key={idx}>
            <div className={`col-12 col-md-6 ${idx % 2 === 0 ? '' : 'order-md-2'}`}>
              <img
                data-aos="zoom-in"
                src={img}
                className="img-fluid rounded shadow w-100"
                alt={title}
              />
            </div>
            <div data-aos="fade-right" className={`col-12 col-md-6 ${idx % 2 === 0 ? '' : 'order-md-1'}`}>
              <h3>{title}</h3>
              <p>{address}</p>
              <p>
                <a href={`tel:${phone}`} className="text-info fw-semibold text-decoration-underline">
                  {phone}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
