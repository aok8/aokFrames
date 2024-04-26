'use client'
import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import '@/styles/globals.css';
import SplashLogo from './SplashLogo';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    anime.timeline({
      easing: 'easeInOutSine',
      targets: '#logo',
      complete: finishLoading
    })
    .add({
      targets: '#logo',
      opacity: [0, 1], // Animate opacity from 0 to 1
      duration: 500, // Duration of the opacity animation
      easing: 'linear'
    })
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a11',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 500 // GSAP's true for drawSVG is equivalent to full line being drawn
    }, 0) // Offset at 0 to chain animations
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 1000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 1500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 2000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 2500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k11',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 3000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 3500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 4000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 4500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 5000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 5500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f21',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 6000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f22',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 6500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 7000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 7500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 8000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 8500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames4',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 9000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames5',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 9500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames6',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 10000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames7',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 10500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames8',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 11000
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames9',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700,
      delay: 11500
    }, 0)
    .add({
      easing: 'easeInOutSine',
      targets: '#logo',
      opacity: 0,
      duration: 300
    })
    .add({
      targets: '#splashScreen',
      backgroundColor: '#f1efe9', // Change to black
      duration: 2000, // Duration over which the color change occurs
      easing: 'linear',  // Use a linear easing for smooth color transition
      endDelay: 1000 // This will wait for 0.18 seconds before hiding the element
    });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      animate();
    }, 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="splashScreen" style={{
      height: "100vh", 
      width: "100%",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      alignContent: "center",
      backgroundColor: "#77A07E"}}>
      <SplashLogo/>
    </div>
  );
};

export default SplashScreen;
