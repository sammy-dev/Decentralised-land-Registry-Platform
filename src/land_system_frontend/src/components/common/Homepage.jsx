import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';

function homePage() {
  return (
    <div className="min-h-screen bg-blue-900">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default homePage;