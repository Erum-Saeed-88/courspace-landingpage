// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import PopularCourses from './components/PopularCourses';
import LearningEnjoyable from './components/LearningEnjoyable';
import TestimonialSection from './components/TestimonialSection';
import ExpertMentors from './components/ExpertMentors';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Testimonial from './pages/Testimonial';
import Mentor from './pages/Mentor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PopularCourses" element={<PopularCourses />} />
          <Route path="/TestimonialSection" element={<TestimonialSection />} />
          <Route path="/ExpertMentors" element={<ExpertMentors />} />
          
          {/* Simple Placeholder Pages */}
          <Route path="/signin" element={
            <div className="text-center py-5">
              <h2>Sign In Page</h2>
              <p>Sign In form will come here</p>
            </div>
          } />
          
          <Route path="/signup" element={
            <div className="text-center py-5">
              <h2>Sign Up Page</h2>
              <p>Sign Up form will come here</p>
            </div>
          } />
        </Routes>
        <PopularCourses />
        <LearningEnjoyable />
        <TestimonialSection />
        <ExpertMentors />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;