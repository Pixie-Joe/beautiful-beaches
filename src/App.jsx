import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';

import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Home from './components/Hero';
import Blog from './components/Blog';
import BeachList from './components/BeachList';
import BeachDetails from './components/BeachDetails';
import ResortDetail from './components/ResortDetailPage';
import RegionPage from './components/RegionPage';
import Carousel3d from './components/Carousel3d';
import Footer from './components/Footer';
import Location from './components/Location';
import Contact from './components/Contact';
import AboutUs from './components/About';

function App() {
  return (
    <Router>
      {/* Persistent navigation bar across all routes */}
      <Navbar />

      {/* Hero section displayed at the top of the homepage */}
      <Element name="home">
        <Home />
      </Element>

      {/* 3D Carousel for showcasing beach videos or images */}
      <Carousel3d />

      {/* Define all routing paths for beach and resort details */}
      <Element name="categories">
        <Routes>
          {/* Main region selection page */}
          <Route path="/" element={<RegionPage />} />

          {/* List of beaches/resorts under a selected region */}
          <Route path="/categories/:region" element={<BeachList />} />

          {/* Beach details page */}
          <Route path="/details/:region/beach/:id" element={<BeachDetails />} />

          {/* Resort details page */}
          <Route path="/details/:region/resort/:id" element={<ResortDetail />} />
        </Routes>
      </Element>

      {/* Blog section */}
      <Element name="blog">
        <Blog />
      </Element>

      <Element name="about">
        <AboutUs />
      </Element>


      {/* Contact section with form or contact details */}
      <Element name="contact">
        <Contact />
      </Element>

      {/* Location map or address display */}
      <Location />

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
