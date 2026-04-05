
import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const mentors = [
  {
    id: 1,
    name: "Jhon Dwirian",
    role: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    company: "Grab",
    companyColor: "#00c853"
  },
  {
    id: 2,
    name: "Leon S Kennedy",
    role: "Machine Learning",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    company: "Google",
    companyColor: "#4285f4"
  },
  {
    id: 3,
    name: "Nguyễn Thuy",
    role: "Android Development",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    company: "Airbnb",
    companyColor: "#ff5a5f"
  }
];

const ExpertMentors = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Expert <span className='text-warning'>Mentors</span></h2>
        </div>

        <Carousel 
          indicators={true}
          controls={true}
          interval={4000}
          className="mentor-carousel"
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          {/* Slide 1 - All 3 Mentors */}
          <Carousel.Item>
            <Row className="g-4 justify-content-center">
              {mentors.map((mentor) => (
                <Col lg={4} md={6} key={mentor.id}>
                  <Card className="border-0 shadow-sm h-100 mentor-card">
                    <div className="p-4 pb-0">
                      <div className="rounded-4 overflow-hidden" style={{ height: '260px' }}>
                        <img 
                          src={mentor.image} 
                          alt={mentor.name}
                          className="img-fluid w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>

                    <Card.Body className="px-4 pt-4 pb-4">
                      <h5 className="fw-bold mb-1">{mentor.name}</h5>
                      <p className="text-muted mb-3">{mentor.role}</p>
                      
                      <p className="text-muted small" style={{ lineHeight: '1.6' }}>
                        {mentor.desc}
                      </p>

                      <div className="mt-4">
                        <span 
                          className="fw-semibold"
                          style={{ color: mentor.companyColor, fontSize: '1.1rem' }}
                        >
                          {mentor.company}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          {/* Agar aap chahein to yahan aur slides add kar sakte hain */}
          {/* Example: Slide 2 */}
          {/* <Carousel.Item>
            <Row>...</Row>
          </Carousel.Item> */}
        </Carousel>

        {/* Optional: Custom Indicators Style */}
        <style jsx>{`
          .mentor-carousel .carousel-indicators button {
            background-color: #6c757d;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 5px;
          }
          .mentor-carousel .carousel-indicators button.active {
            background-color: #0d6efd;
            width: 30px;
            border-radius: 10px;
          }
          .mentor-card:hover {
            transform: translateY(-8px);
            transition: all 0.3s ease;
          }
        `}</style>
      </Container>
    </section>
  );
};

export default ExpertMentors;