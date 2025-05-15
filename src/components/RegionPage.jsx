import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for each region
import northImage from '../assets/Images/North.webp';
import southImage from '../assets/Images/South.webp';
import eastImage from '../assets/Images/East.jpg';
import westImage from '../assets/Images/West.jpg';

const RegionPage = () => {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  // Array of region data (name, image, and route link)
  const regions = [
    { name: 'North', image: northImage, link: '/categories/north' },
    { name: 'South', image: southImage, link: '/categories/south' },
    { name: 'East', image: eastImage, link: '/categories/east' },
    { name: 'West', image: westImage, link: '/categories/west' }
  ];

  return (
    <div data-aos="zoom-in" className="container-fluid cate-region position-relative">
      {/* Section heading */}
      <h2 className="text-center my-5 fw-bold">
        Select a Region for your Relaxation
      </h2>

      {/* Region card grid */}
      <div className="row justify-content-center text-center">
        {regions.map((region) => (
          <div className="col-md-4 col-sm-6 mb-4" key={region.name}>
            {/* Link to the selected region's category page */}
            <Link to={region.link} className="text-decoration-none">
              <div className="card card-hover shadow-lg rounded position-relative">
                
                {/* Region image */}
                <img
                  src={region.image}
                  alt={region.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                
                {/* Region name overlay with AOS animation */}
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h5 data-aos="fade-right" className="text-white">
                    {region.name}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionPage;
