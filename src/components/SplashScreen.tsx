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
      duration: 200
    }, '-=50') // Offset at 0 to chain animations
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 100
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #o',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 700
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k11',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f21',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f22',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 400
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 500
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames4',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames5',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames6',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 500
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames7',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 400
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames8',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames9',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo',
      opacity: 0,
      duration: 1000
    },'+=50')
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
