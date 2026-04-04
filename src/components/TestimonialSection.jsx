// src/components/Testimonial.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TestimonialSection = () => {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
      <Container>
        <Row className="align-items-center g-5">
          
          {/* Left Content */}
          <Col lg={7}>
            <div className="pe-lg-5">
              <h2 className="display-4 fw-bold mb-2">
                Testimonial What our <span style={{ color: '#0ea5e9' }}>Students Say</span>
              </h2>
              
              <div className="mb-4">
                <div 
                  style={{ 
                    width: '180px', 
                    height: '4px', 
                    background: 'linear-gradient(to right, #f59e0b, #eab308)',
                    borderRadius: '10px'
                  }}
                />
              </div>

              <h4 className="fw-semibold mb-3">Best Quality Online Course!</h4>
              
              <p className="lead text-muted mb-5" style={{ lineHeight: '1.7' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Student Info */}
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="rounded-circle overflow-hidden border border-2 border-white shadow"
                  style={{ width: '65px', height: '65px' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                    alt="Riski"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <div>
                  <h5 className="fw-bold mb-0">Riski</h5>
                  <p className="text-muted mb-0">Software Engineer</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Image with Clip-Path */}
          <Col lg={5}>
            <div className="position-relative d-flex justify-content-center">
              <div 
                className="shadow-lg"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  overflow: 'hidden',
                  background: '#fff'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" 
                  alt="Student Testimonial"
                  className="img-fluid w-100"
                  style={{ 
                    display: 'block',
                    height: 'auto'
                  }}
                />
              </div>

              {/* Decorative Background Shape */}
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: '480px',
                  height: '480px',
                  background: 'linear-gradient(135deg, #67e8f9, #a5f3fc)',
                  opacity: '0.15',
                  zIndex: '-1',
                  top: '-40px',
                  right: '-60px'
                }}
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;