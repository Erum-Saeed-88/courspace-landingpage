import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="bg-light shadow-sm py-3">
      <Container>
      
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold fs-3 text-success">
        <span className='text-warning'>C</span>ourse<span className='text-warning'>S</span>pace
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
        
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-3 fw-medium text-success">Home</Nav.Link>
            <Nav.Link as={Link} to="/PopularCourses" className="mx-3 fw-medium text-success">Courses</Nav.Link>
            <Nav.Link as={Link} to="/TestimonialSection" className="mx-3 fw-medium text-success">Testimonial</Nav.Link>
            <Nav.Link as={Link} to="/ExpertMentors" className="mx-3 fw-medium text-success">Mentors</Nav.Link>
          </Nav>

        
          <div className="d-flex gap-2">
            <Button 
              as={Link} 
              to="/"
              variant="outline-success fw-bold" 
              className="px-4"
            >
              Sign In
            </Button>
            <Button 
              as={Link} 
              to="/"
              variant="success" 
              className="px-4 fw-bold"
            >
              Sign Up
            </Button> 
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;