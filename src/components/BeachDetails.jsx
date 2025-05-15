import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { data } from '../data';

// Importing styles and icons
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrMapLocation } from "react-icons/gr";
import { TbBeach } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

// Animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

const BeachDetails = () => {
  // Initialize animation on scroll (AOS)
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  // Retrieve parameters from URL
  const { region, id } = useParams();
  const navigate = useNavigate();

  // Find the beach object using region and id
  const beach = data[region]?.beach?.find(b => b.id === id);

  // If no matching beach is found
  if (!beach) return <div className="container mt-5 text-danger">Beach not found.</div>;

  // Function to go back to the previous page
  const handleClose = () => {
    navigate(-1);
  };

  // Link to corresponding resort details
  const resortLink = `/details/${region}/resort/${beach.resortId}`;

  return (
    <div className="container-fluid px-5 py-5" style={{ marginTop: '10rem' }}>
      <div className="row g-0">
        {/* Left side: Beach image */}
        <div data-aos="zoom-in" className="col-md-6">
          <img
            src={beach.image}
            alt={beach.name}
            className="img-fluid w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right side: Beach details */}
        <div className="col-md-6 text-dark d-flex align-items-center justify-content-center bg-light position-relative p-4">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            
            {/* Close (X) button */}
            <button
              data-aos="zoom-in"
              onClick={handleClose}
              className="btn btn-dark btn-sm position-absolute top-0 end-0 m-3"
              style={{
                zIndex: 10,
                padding: '0.5rem 0.75rem',
                borderRadius: '5rem',
                fontSize: '1.5rem'
              }}
            >
              <strong>X</strong>
            </button>

            {/* Beach info display */}
            <h2 data-aos="fade-left">{beach.name} <TbBeach /></h2>
            <p data-aos="fade-right"><strong><GrMapLocation /> Location:</strong> {beach.location}</p>
            <p data-aos="fade-left"><strong>Ratings:</strong> {beach.ratings} <FaStar style={{ color: 'yellow' }} /></p>
            <p data-aos="fade-right"><strong><TiWeatherPartlySunny /> Weather:</strong> {beach.weather}</p>
            <p data-aos="fade-left"><strong>Activities:</strong> {beach.activities.join(', ')}</p>

            {/* Beach description */}
            <div data-aos="fade-right" className="mt-3">
              <p>{beach.description}</p>
            </div>

            {/* How to reach section */}
            <div data-aos="fade-left" className="mt-3">
              <h5>How to Get There</h5>
              <p>{beach.howToGetThere}</p>
            </div>

            {/* Link to the corresponding resort */}
            <div data-aos="fade-up" className="mt-4">
              <Link to={resortLink} className="btn btn-primary">
                View Resort
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachDetails;
