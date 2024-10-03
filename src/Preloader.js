// src/Preloader.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css'; // Import the CSS for preloader

const Preloader = ({ onLoadComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the text elements
    tl.to('.preloader-container', { duration: 0, opacity: 1 }) // Start with invisible container
      .to('.text-left', { duration: 1, x: '0%', opacity: 1, ease: 'power3.out' })
      .to('.text-right', { duration: 1, x: '0%', opacity: 1, ease: 'power3.out' }, '-=1') // Overlap animation
      .to('.preloader-container', { duration: 1, opacity: 0, delay: 2, onComplete: onLoadComplete }); // Fade out after 2 seconds

  }, [onLoadComplete]);

  return (
    <div className="preloader-container">
      <div className="text-left">Measure</div>
      <div className="text-right">-Impact</div>
    </div>
  );
};

export default Preloader;
