import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-5 bg-success">
      <Container>
        <Row className="gy-5">
          
        
          <Col lg={5} md={6}>
            <h2 className="fw-bold fs-3 mb-3">Coursespace</h2>
            <p className="lead opacity-90" style={{ maxWidth: '380px' }}>
              Coursespace is an online learning platform that has been operating since 2018 until now.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-4 mt-4">
              <a href="#" className="text-white fs-4 opacity-75 hover-opacity-100">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white fs-4 opacity-75 hover-opacity-100">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white fs-4 opacity-75 hover-opacity-100">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white fs-4 opacity-75 hover-opacity-100">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="text-white fs-4 opacity-75 hover-opacity-100">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </Col>

          {/* Courses Column */}
          <Col lg={2} md={6}>
            <h5 className="fw-semibold mb-3">Course</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/courses" className="text-white text-decoration-none opacity-75 hover-opacity-100">UI/UX Design</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-white text-decoration-none opacity-75 hover-opacity-100">Mobile Development</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-white text-decoration-none opacity-75 hover-opacity-100">Machine Learning</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-white text-decoration-none opacity-75 hover-opacity-100">Web Development</Link>
              </li>
            </ul>
          </Col>

          {/* Menu Column */}
          <Col lg={2} md={6}>
            <h5 className="fw-semibold mb-3">Menu</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-white text-decoration-none opacity-75 hover-opacity-100">Courses</Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonial" className="text-white text-decoration-none opacity-75 hover-opacity-100">Testimonial</Link>
              </li>
              <li className="mb-2">
                <Link to="/mentor" className="text-white text-decoration-none opacity-75 hover-opacity-100">Mentor</Link>
              </li>
            </ul>
          </Col>

          {/* About Column */}
          <Col lg={3} md={6}>
            <h5 className="fw-semibold mb-3">About</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none opacity-75 hover-opacity-100">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-white text-decoration-none opacity-75 hover-opacity-100">Privacy & Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white text-decoration-none opacity-75 hover-opacity-100">Term & Condition</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-white text-decoration-none opacity-75 hover-opacity-100">FAQ</Link>
              </li>
            </ul>
          </Col>

        </Row>

        {/* Bottom Copyright Line */}
        <Row className="mt-5 pt-4 border-top border-light border-opacity-25">
          <Col>
            <p className="text-center text-white opacity-75 mb-0 small">
              © 2026 Coursespace. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;