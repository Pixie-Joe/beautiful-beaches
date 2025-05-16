import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data'; // Assuming you have your resort data in the data.js file
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiFoodMenu } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { useEffect } from 'react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResortDetailPage = () => {

  useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
      }, []);

  const { region, id } = useParams();
  const navigate = useNavigate(); // Hook to navigate back to the previous page

  // Find the specific resort based on the region and id
  const resort = data[region]?.resort?.find(r => r.id === id);

  if (!resort) return <div className="container mt-5 text-danger">Resort not found.</div>;

  // Function to handle the close button (goes back to the previous page)
  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container-fluid text-dark px-5 py-5" style={{ marginTop: '10rem' }}>
      <div className="row">
        {/* Image Side */}
        <div data-aos="zoom-in" className="col-md-6 pt-2">
          <img
            src={resort.image}
            alt={resort.name}
            className="img-fluid w-100"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Details Side */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light position-relative p-4">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <button
              data-aos="zoom-in"
              onClick={handleClose}
              className="btn btn-dark btn-sm position-absolute top-0 end-0 mb-3"
              aria-label="Close resort details"
              style={{ zIndex: 10, borderRadius: '5rem', fontSize: '1.5rem' }}
            >
              <strong>X</strong>
            </button>

            <h2 data-aos="fade-left" className="mb-3">{resort.name}</h2>
            <p data-aos="fade-right"><strong><GrMapLocation /> Location:</strong> {resort.location}</p>

            <div data-aos="fade-left" className="mt-3">
              <h4>Description:</h4>
              <p>{resort.description}</p>
            </div>

            <div data-aos="fade-right" className="mt-3">
              <h4>Menu. <BiFoodMenu /></h4>
              <ul>
                {resort.menu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-left" className="mt-3">
              <h4>Activities</h4>
              <ul>
                {resort.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-right" className="mt-3">
              <h4>How to Get There</h4>
              <p>{resort.howToGetThere}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortDetailPage;