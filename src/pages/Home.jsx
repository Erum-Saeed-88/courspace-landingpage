// src/pages/Home.jsx
/*import React from 'react';

const Home = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          
          {/* Left Content }
          <div className="col-lg-7">
            <h1 className="display-3 fw-bold mb-3">
              Improve your Skill{' '}
              <span className="text-info">✦</span>
              <br />
              with Different Way
            </h1>

            <p className="lead text-muted mb-4" style={{ maxWidth: '520px' }}>
              Let's take an online course to improve your skills in a different way. 
              You can set your own study time according to your learning speed. So 
              you can study comfortably and absorb the material easily.
            </p>

            <div className="d-flex gap-3 mb-5">
              <button className="btn btn-success btn-lg px-5 py-3 fw-medium">
                Get Started
              </button>
              <button className="btn btn-outline-success btn-lg px-5 py-3 d-flex align-items-center gap-2">
                <span>▶</span> Watch Video
              </button>
            </div>
            </div>


          {/* Right Image *}
          <div className="col-lg-5 text-center">
            <div className="position-relative">
              <img 
                src="https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fhome-hero.jpg&w=1920&q=75" 
                alt="Student learning"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '580px', objectFit: 'cover', width: '100%' }}
              />

              {/* Floating Pencil *}
              <div className="position-absolute" 
                   style={{ top: '22%', right: '12%', transform: 'rotate(30deg)' }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;*/






// src/pages/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="hero-section py-5" style={{ background: '#f8fafc' }}>
      <Container>
        <Row className="align-items-center min-vh-100 g-5">
          
          {/* Left Content */}
          <Col lg={7}>
            <div className="pe-lg-4">
              <h1 className="display-4 fw-bold mb-3">
                Improve your Skill{' '}
                <span className="text-success">✦</span>
                <br />
                with Different Way
              </h1>

              <p className="lead text-muted mb-4" style={{ maxWidth: '520px', lineHeight: '1.6' }}>
                Let's take an online course to improve your skills in a different way. 
                You can set your own study time according to your learning speed. So 
                you can study comfortable and absorb the material easily.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Button 
                  variant="success" 
                  size="lg" 
                  className="px-5 py-3 fw-medium rounded-3 "
                >
                  Get Started
                </Button>
                
                <Button 
                  variant="outline-success" 
                  size="lg" 
                  className="px-5 py-3 d-flex align-items-center gap-2 rounded-3"
                >
                  <span>▶</span> Watch Video
                </Button>
              </div>

              
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col lg={5} className="text-center">
            <div className="position-relative">
              <img 
                src="https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fhome-hero.jpg&w=1920&q=75" 
                alt="Student with books"
                className="img-fluid rounded-4 shadow"
                style={{ 
                  maxHeight: '580px', 
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mt-5 pt-5 border border-2 border-light rounded-4 shadow-sm">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h2 className="display-5 fw-bold text-warning">10K+</h2>
            <p className="text-muted fw-medium">Students</p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h2 className="display-5 fw-bold text-warning">20+</h2>
            <p className="text-muted fw-medium">Quality Course</p>
          </Col>
          <Col md={4} className="text-center">
            <h2 className="display-5 fw-bold text-warning">10+</h2>
            <p className="text-muted fw-medium">Experience Mentors</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;