import React from 'react';
import '../App.css'; // Main CSS styles for layout
import img1 from '../assets/Images/beach5.jpg';
import img2 from '../assets/Images/Club-house.jpeg';
import img3 from '../assets/Images/suite1.jpg';
import img4 from '../assets/Images/Turks-Resturant.jpeg'; 
import img5 from '../assets/Images/Garden-View.jpeg'; 
import img6 from '../assets/Images/Angel-Hall.jpeg'; 
import 'aos/dist/aos.css'; // Import AOS animations

// Static blog post data with image, title and description
const blogPosts = [
  {
    title: 'The Villa Park',
    text: 'A fun place for family and friend, it with pools, swing and other play thing for kids, a place for children adults, Our parks are very attractive .',
    img: img1,
  },
  {
    title: 'The Club house',
    text: 'Our club house is the best club house ever!, late night parties we sell the best drinks, it is very affordable, a place to have fun!  .',
    img: img2,
  },
  {
    title: 'Hotels & Suites',
    text: 'Hotel and suties, Our hotels and suites are very spacious and well furnished, we have the best hotel rooms, we have according to your tastes   .',
    img: img3,
  },
  {
    title: 'Turks Resturants',
    text: 'Our resturants serves the most delicious food, for Afican and European country, it is seved in the way you like it.',
    img: img4,
  },
  {
    title: 'Garden View', 
    text: 'Take guided nature walks where you might spot elephants in their natural habitat.',
    img: img5,
  },
  {
    title: 'Angel Hall',
    text: 'A very spacious hall for weddings and some other celebrations.',
    img: img6,
  },
];

// Blog component displays all blog post cards in an alternating layout
function Blog() {
  return (
    <div className="blog-container">
      {/* Blog section header */}
      <h1 className="blog-title">Our Blog Adventures</h1>

      {/* Loop through blog posts and render each one */}
      {blogPosts.map((post, index) => (
        <div
          className={'blog-card ' + (index % 2 === 0 ? 'left' : 'right')} // Alternate layout left/right
          key={index}
        >
          {/* Post image with AOS animation */}
          <img
            data-aos="zoom-in"
            src={post.img}
            alt={post.title}
            className="blog-image"
          />

          {/* Post text content */}
          <div data-aos="flip-right" className="blog-text">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
