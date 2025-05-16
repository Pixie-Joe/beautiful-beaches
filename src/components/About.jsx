import React, { useState } from "react";
import abb from '../assets/Images/North.webp';
import abi from '../assets/Images/South.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="container py-5 text-center">
      <h2 className="mb-4 text-primary">About Us</h2>

      <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
        Welcome to <strong>Beautiful Beaches & Resort</strong>, where luxury meets the ocean. Nestled along
        pristine white-sand beaches and surrounded by turquoise waters, our resort is a sanctuary of
        serenity and indulgence.
      </p>

      <p className="lead mt-4 mx-auto" style={{ maxWidth: '700px' }}>
        Whether you seek relaxation, adventure, or a romantic escape, we offer world-class
        amenities, exceptional service, and breathtaking views to make your stay unforgettable. Let
        the sound of the waves and golden sunsets be the backdrop to your perfect getaway.
      </p>

      {/* Learn More Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="btn btn-primary mt-4"
      >
        Learn more
      </button>

      {/* Modal Popup */}
      {showPopup && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">More about Beautiful Beaches</h5>
                <button type="button" className="btn-close" onClick={() => setShowPopup(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body text-start">
                <p>
                  Beautiful Beaches is where luxury meets the ocean. Tucked along an exclusive stretch of coastline, our resort is a sanctuary of sophistication, serenity, and personalized service...
                </p>
                <p>
                  From our elegantly appointed suites and private villas to curated culinary experiences and bespoke wellness offerings, Beautiful Beaches redefines beachfront luxury.
                </p>
                <p className="fw-bold text-center">Escape. Indulge. Belong.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="row my-5 justify-content-center">
        <div className="col-md-5 mb-4">
          <img src={abb} alt="North Beach" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-5 mb-4">
          <img src={abi} alt="South Beach" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Feature Description Section */}
      <div className="row text-start justify-content-center">
        <div className="col-md-5 mb-4">
          <h4 className="fw-bold">We Serve Fresh and Delicious Food</h4>
          <p>
            At Beautiful Beach, the beach isn't the only thing that will take your breath away — our food will too. Nestled along the shoreline with panoramic ocean views, our resort offers more than just a place to rest; it’s a culinary destination.
          </p>
          <p>
            From sunrise breakfasts by the sea to romantic candlelit dinners under the stars, every meal is a celebration of taste, tradition, and tropical paradise.
          </p>
        </div>

        <div className="col-md-5 mb-4">
          <h4 className="fw-bold">Affordable and Amazing Rooms</h4>
          <p>
            Imagine waking up to the gentle sound of waves, the scent of salty sea air, and the warm sun rising over crystal-clear waters. At Seabreeze Beach Resort, this dream becomes your everyday reality.
          </p>
          <p>
            Nestled along a pristine stretch of coastline, our resort offers luxurious yet affordable beachfront hotel rooms. Whether you're planning a romantic escape or a family getaway, our rooms provide the perfect blend of style and serenity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
