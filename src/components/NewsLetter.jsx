import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        alert('Thank you for subscribing!');
        setEmail('');
        setSubscribed(false);
      }, 800);
    }
  };

  return (
    <section className="py-5 bg-warning">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
              <h2 className="fw-bold display-5 mb-3 text-light">
                Subscribe to Our News Letter
              </h2>
              
              <p className="lead opacity-90 mb-4 text-muted" style={{ fontSize: '1.1rem' }}>
                Subscribe to our newsletter to get information about our courses.
              </p>

              <Form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="py-3 px-4 rounded-3 border-0"
                  style={{ maxWidth: '420px', fontSize: '1.05rem' }}
                />
                
                <Button 
                  type="submit"
                  variant="dark"
                  className="px-5 py-3 fw-semibold rounded-3"
                  disabled={subscribed}
                  style={{ 
                    backgroundColor: '#0a4d68',
                    border: 'none',
                    fontSize: '1.05rem',
                    minWidth: '140px'
                  }}
                >
                  {subscribed ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </Form>

              <p className="text-white-50 mt-3 small">
                We respect your inbox. Unsubscribe at any time.
              </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;