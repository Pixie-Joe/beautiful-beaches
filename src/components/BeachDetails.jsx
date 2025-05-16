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
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Reduced duration for better performance
    AOS.refresh();
  }, []);

  const { region, id } = useParams();
  const navigate = useNavigate();
  const beach = data[region]?.beach?.find(b => b.id === id);

  if (!beach) return <div className="container mt-5 text-danger">Beach not found.</div>;

  const handleClose = () => {
    navigate(-1);
  };

  const resortLink = `/details/${region}/resort/${beach.resortId}`;

  return (
    <div className="container-fluid px-5 py-5" style={{ marginTop: '10rem' }}>
      <div className="row g-0">

        {/* Beach Image */}
        <div data-aos="zoom-in" className="col-md-6">
          <img
            src={beach.image}
            alt={beach.name}
            className="img-fluid w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Beach Details */}
        <div data-aos="fade-up" className="col-md-6 text-dark d-flex align-items-center justify-content-center bg-light position-relative p-4">
          <div className="w-100" style={{ maxWidth: '600px' }}>

            {/* Close Button */}
            <button
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

            {/* Details */}
            <h2>{beach.name} <TbBeach /></h2>
            <p><strong><GrMapLocation /> Location:</strong> {beach.location}</p>
            <p><strong>Ratings:</strong> {beach.ratings} <FaStar style={{ color: 'yellow' }} /></p>
            <p><strong><TiWeatherPartlySunny /> Weather:</strong> {beach.weather}</p>
            <p><strong>Activities:</strong> {beach.activities.join(', ')}</p>

            {/* Description */}
            <div className="mt-3">
              <p>{beach.description}</p>
            </div>

            {/* How to Reach */}
            <div className="mt-3">
              <h5>How to Get There</h5>
              <p>{beach.howToGetThere}</p>
            </div>

            {/* Resort Link */}
            <div data-aos="zoom-in" className="mt-4">
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
