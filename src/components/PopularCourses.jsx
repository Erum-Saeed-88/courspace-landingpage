// src/components/PopularCourses.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const courses = [
  {
    id: 1,
    title: "Android Development from Zero to Hero",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    rating: 5,
    reviews: 8,
    price: 25,
  },
  {
    id: 2,
    title: "UI/UX Complete Guide",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600",
    rating: 5,
    reviews: 15,
    price: 20,
  },
  {
    id: 3,
    title: "Mastering Data Modeling Fundamentals",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    rating: 4,
    reviews: 7,
    price: 30,
  },
];

const PopularCourses = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} style={{ color: index < rating ? '#ffc107' : '#e4e5e9', fontSize: '1.1rem' }}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Most Popular Courses</h2>
        </div>

        <Row className="g-4">
          {courses.map((course) => (
            <Col lg={4} md={6} key={course.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-card">
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={course.image} 
                    style={{ 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="hover-zoom"
                  />
                </div>

                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="fw-semibold mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                    {course.title}
                  </Card.Title>

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div>{renderStars(course.rating)}</div>
                    <span className="text-muted small">({course.reviews})</span>
                  </div>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold fs-5 text-success">${course.price}</span>
                      <span className="text-muted"> / course</span>
                    </div>
                    
                    <Button 
                      variant="link" 
                      className="text-dark fw-medium d-flex align-items-center gap-1 p-0"
                      style={{ textDecoration: 'none' }}
                    >
                      View Course 
                      <span style={{ fontSize: '1.3rem', lineHeight: '1' }}>→</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Navigation Dots & Arrows (Decorative) */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <div className="d-flex gap-2">
            <div className="rounded-circle bg-success" style={{ width: '10px', height: '10px' }}></div>
            <div className="rounded-circle bg-secondary" style={{ width: '10px', height: '10px' }}></div>
          </div>
          
          <Button variant="light" className="rounded-circle p-2 shadow-sm">
            ←
          </Button>
          <Button variant="light" className="rounded-circle p-2 shadow-sm">
            →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PopularCourses;