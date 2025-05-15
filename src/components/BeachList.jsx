import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data'; // Import beach and resort data
import AOS from 'aos';
import 'aos/dist/aos.css';

import backgroundImg from '../assets/Images/premium_photo-1664304458186-9a67c1330d02.jpg'; // Background image

const BeachList = () => {

  // Initialize animation on scroll (AOS)
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  const { region } = useParams();      // Get selected region from URL
  const navigate = useNavigate();      // Hook to navigate back

  // Retrieve beaches from the region in the data object
  const beachItems = data[region]?.beach || []; // Fallback to empty array if region invalid

  // Navigate back when X button is clicked
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div
      className="w-100 beach-list"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        marginTop: '10rem',
      }}
    >
      {/* Background dark overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      />

      {/* Close button in the top-right corner */}
      <button
        onClick={handleClose}
        className="btn btn-dark btn-sm position-absolute top-0 end-0 m-3"
        style={{ zIndex: 2, borderRadius: '5rem', fontSize: '1.5rem' }}
      >
        <strong>X</strong>
      </button>

      {/* Page heading */}
      <h2 data-aos="fade-left" className="text-center mb-4 text-white" style={{ position: 'relative', zIndex: 1 }}>
        Select a Beach in the {region.charAt(0).toUpperCase() + region.slice(1)}
      </h2>

      {/* List of beaches for the selected region */}
      <div className="row g-4 justify-content-center" style={{ position: 'relative', zIndex: 1 }}>
        {beachItems.length === 0 ? (
          // If no beaches found for the region
          <div className="col-12 text-center text-white">
            <p>No beaches found for this region.</p>
          </div>
        ) : (
          // Map through each beach and display a card
          beachItems.map((item, index) => (
            <div key={index} className="col-md-6 col-sm-12">
              <Link to={item.link} className="text-decoration-none">
                <div data-aos="zoom-in" className="card shadow-lg h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="text-dark">{item.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BeachList;
