import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from '@remixicon/react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <section className='footer position-relative mt-5 mt-lg-5'>
      <div className="container px-0">
        <div className="flex_div d-flex flex-column flex-lg-row gap-3 gap-lg-5 mb-lg-5">
          <div className="footer__item text-center text-lg-start">
            <p className='mb-5 fs-5'>For Exclusive Offers and Updates Subscribe Our SeaPearl NewsLetter</p>
            <ul className='list_div d-flex justify-content-center justify-content-lg-start'>
              <li className='list-unstyled'>
                <a href="">
                  <RiYoutubeFill size={25} className='youtube' />
                </a>
              </li>
              <li className='list-unstyled'>
                <a href="">
                  <RiFacebookCircleFill size={25} className='facebook' />
                </a>
              </li>
              <li className='list-unstyled'>
                <a href="">
                  <RiLinkedinFill size={25} className='linkin' />
                </a>
              </li>
              <li className='list-unstyled'>
                <a href="">
                  <RiInstagramFill size={25} className='instagram' />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item text-center text-lg-end">
            <h3 className='mb-3 fs-2'>Pages</h3>
            <ul>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>About Us</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Rooms</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Services</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Restaurant</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Contact</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__item text-center text-lg-start">
            <h3 className='mb-3 fs-2'>Services</h3>
            <ul>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Restaurant & Bar</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>SPA & Wellness</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Infinity Pool</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Team</a>
              </li>
              <li className='list-unstyled'>
                <a href="" className='fs-6 text-decoration-none'>Gallery</a>
              </li>
            </ul>
          </div>

          <div className="footer__item text-center">
            <h3 className='mb-3 fs-2'>Contact</h3>
            <div className="flex__div d-flex flex-column">
              <p>55 East Allen Avenue. Ikeja, Lagos 11201</p>
              <p>Contact@beautifulbeaches.com</p>
              <p>+234 911 2524 812</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;