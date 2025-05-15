import React, { useState, useEffect } from 'react'
import { TbBeach } from 'react-icons/tb'
import { RiCloseLine, RiMenu3Line, RiMoonClearLine, RiSunLine } from '@remixicon/react'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);

  // Theme toggle
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  };

  // Idle detection
  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!hovering) {
          setVisible(false);
        }
      }, 3000); // hide after 3s of inactivity
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('scroll', resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('scroll', resetTimer);
    };
  }, [hovering]);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-wrapper');
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      {openMenu && <div className={`menu-overlay ${openMenu ? 'show' : ''}`} onClick={() => setOpenMenu(false)} />}

      <div
        className={`navbar-wrapper fixed-top transition-navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="container-div d-flex justify-content-between align-items-center py-2 position-relative">
          {/* Logo */}
          <div data-aos="flip-right" className="position-absolute start-0 ms-3">
            <h1 className="text-uppercase d-flex align-items-center gap-1">
              <TbBeach /> Beaches
            </h1>
          </div>

          {/* Centered Links */}
          <div className="menu-items d-none d-sm-flex justify-content-center mx-auto gap-4">
            <Link to="home" smooth={true} duration={900} className="menu-item ">HOME</Link>
            <Link to="categories" smooth={true} duration={900} className="menu-item ">CATEGORIES</Link>
            <Link to="blog" smooth={true} duration={900} className="menu-item ">BLOG</Link>
            <Link to="about" smooth={true} duration={900} className="menu-item ">ABOUT US</Link>
            <Link to="contact" smooth={true} duration={900} className="menu-item ">CONTACT US</Link>
          </div>

          {/* Theme toggle & mobile menu button */}
          <div className="position-absolute end-0 me-4 d-flex gap-3 align-items-center">
            <div className="theme-toggle custom-pointer" onClick={toggleTheme}>
              {darkTheme ? <RiSunLine className="text-warning" /> : <RiMoonClearLine className="text-dark" />}
            </div>

            <div className="d-block d-sm-none">
              {openMenu
                ? <RiCloseLine className="text-danger" onClick={() => setOpenMenu(false)} />
                : <RiMenu3Line onClick={() => setOpenMenu(true)} />
              }
            </div>
          </div>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div className={`mobile-menu d-flex flex-column mt-3 px-3 gap-3 border border-secondary rounded-3 ${openMenu ? 'show' : ''}`}>
          <Link to="home" smooth={true} duration={900} className="menu-item" onClick={() => setOpenMenu(false)}>HOME</Link>
          <Link to="categories" smooth={true} duration={900} className="menu-item" onClick={() => setOpenMenu(false)}>CATEGORIES</Link>
          <Link to="blog" smooth={true} duration={900} className="menu-item" onClick={() => setOpenMenu(false)}>BLOG</Link>
          <Link to="about" smooth={true} duration={900} className="menu-item" onClick={() => setOpenMenu(false)}>ABOUT US</Link>
          <Link to="contact" smooth={true} duration={900} className="menu-item" onClick={() => setOpenMenu(false)}>CONTACT US</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;