// src/components/LearningEnjoyable.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LearningEnjoyable = () => {
  const benefits = [
    {
      icon: "📱",
      title: "Easy Accessible",
      color: "#10b981",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      icon: "⏰",
      title: "Flexible Study Time",
      color: "#10b981",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      icon: "💰",
      title: "More Affordable Cost",
      color: "#f59e0b",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      icon: "👨‍🏫",
      title: "Consultation With Mentor",
      color: "#3b82f6",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    }
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)' }}>
      <Container>
        <Row className="align-items-center g-5">
          
          {/* Left Side - Image + Overlays */}
          <Col lg={5}>
            <div className="position-relative">
              
              {/* Main Girl Image with Clip-Path */}
              <div 
                className="shadow-lg overflow-hidden"
                style={{ 
                  maxWidth: '320px',
                  'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                }}
              >
                <img
                  src="https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fhome-feature.png&w=1920&q=97"
                  alt="Happy Student"
                  className="img-fluid w-100"
                  style={{ 
                    display: 'block',
                    height: 'auto'
                  }}
                />
              </div>

              {/* Skills Card (Top Right) - Same as image */}
              <Card 
                className="position-absolute shadow border-0"
                style={{
                  top: '-25px',
                  right: '-35px',
                  width: '215px',
                  background: 'white',
                  zIndex: 10
                }}
              >
                <Card.Body className="p-4">
                  <p className="text-muted small mb-2">Lorem ipsum dolor</p>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>UI/UI Design</small>
                      <small>90%</small>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-warning" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>Mobile Development</small>
                      <small>75%</small>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <small>Web Development</small>
                      <small>85%</small>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-info" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Progress Circle (Bottom Left) */}
              <Card 
                className="position-absolute shadow border-0 p-3"
                style={{
                  bottom: '25px',
                  left: '-25px',
                  background: 'white',
                  width: '135px',
                  zIndex: 10
                }}
              >
                <div className="text-center">
                  <div className="mx-auto mb-2" style={{ width: '82px', height: '82px', position: 'relative' }}>
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="3.5"
                        strokeDasharray="75, 100"
                      />
                    </svg>
                    <div 
                      className="position-absolute top-50 start-50 translate-middle fw-bold fs-3 text-success"
                      style={{ marginTop: '-3px' }}
                    >
                      75%
                    </div>
                  </div>
                  <small className="text-muted">Lorem ipsum</small>
                </div>
              </Card>
            </div>
          </Col>

          {/* Right Side - Content */}
          <Col lg={7}>
            <div className="ps-lg-4">
              <h2 className="display-4 fw-bold mb-3">
                Make your <span className='text-success'>Learning</span> <span style={{ color: '#f59e0b' }}>Enjoyable</span>
              </h2>
              
              <p className="lead text-muted mb-5" style={{ maxWidth: '520px' }}>
                Set the way of learning according to your wishes with some of the benefits 
                that you get us, so you can enjoy the lessons that we provide.
              </p>

              <Row className="g-4">
                {benefits.map((benefit, index) => (
                  <Col md={6} key={index}>
                    <div className="d-flex gap-3">
                      <div 
                        className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '55px', 
                          height: '55px', 
                          backgroundColor: `${benefit.color}15`,
                          fontSize: '28px'
                        }}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">{benefit.title}</h5>
                        <p className="text-muted small mb-0">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LearningEnjoyable;