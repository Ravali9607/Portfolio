import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdClose } from 'react-icons/md';
import { BrowserRouter as Router, Routes, Route, Link, useParams, NavLink } from 'react-router-dom';
import '../index.css';

import Home from './Home.js';
import { About } from './About.js';
import { Resume } from './Resume.js';
import { Contact } from './Contact.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("/");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    console.log()
  }
  return (

    <Router>
      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <div className="border bg-dark">
              {isOpen ? (
                <MdClose className="close-icon" onClick={toggleNavbar} />
              ) : (
                <div className={`toggle-button ${isOpen ? 'visible' : ''}`} onClick={toggleNavbar}>
                  <div className={`line line1 ${isOpen ? 'open' : ''}`}></div>
                  <div className={`line line2 ${isOpen ? 'open' : ''}`}></div>
                  <div className={`line line3 ${isOpen ? 'open' : ''}`}></div>
                </div>
              )}
              {isOpen && (
                <nav>
                  <div className="mi-header-image">
                    <img src='./images/r6.JPEG' className='ravali_img img-fluid' alt='ravali img' />

                  </div>
                  <ul>
                    <li><NavLink
                      to="/"
                      end
                      className={({ isActive }) => (isActive ? 'Link active' : 'Link')}
                     
                    >
                      Home
                    </NavLink></li>
                    <li><NavLink to='/About' className={({isActive}) =>(isActive ? 'Link active':'Link')}>About</NavLink></li>
                    <li><NavLink to='/Resume' className={({isActive}) =>(isActive ? 'Link active':'Link')}>Resume</NavLink></li>
                    <li><NavLink to='/Contact' className={({isActive}) =>(isActive ? 'Link active' :'Link')}>Contact</NavLink></li>
                  </ul>
                </nav>
              )}
              {isOpen && (
                // <hr style={{ color: "white" }}>


                <div className="jobs_icons">
                  <div className="icons">
                    <a href="https://www.linkedin.com/in/ravali-boorla-4b20b3211/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} className="linkedin" />
                    </a>
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} className='linkedin' />
                  </div>

                </div>
              )}
              {isOpen && (
                <div className='text-center'>
                  <div style={{ color: "white" }}>© Copyright</div>
                  <p style={{ color: "white" }}>Designed by Ravali Boorla</p>
                </div>
              )}
            </div>

          </Col>
          <Col xs={12} md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};
