'use client'
import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import '@/styles/globals.css';
import SplashLogo from './SplashLogo';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const getCSSVariableValue = (variable: string) => { //animejs doesn't support css variables
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }
    return '';
  };

  const animate = () => {
    const desiredTotalDuration = 4500; // Total duration for the entire animation in milliseconds

    // Original durations for each animation step
    const originalDurations = [
      500, 100, 200, 200, 250, 500, 200, 200, 200, 300, 300, 200, 200, 200, 300, 300, 550, 400, 400, 300, 500, 500, 400, 300, 300
    ];

    // Calculate the total original duration
    const totalOriginalDuration = originalDurations.reduce((acc, duration) => acc + duration, 0);

    // Calculate the scaling factor
    const scalingFactor = desiredTotalDuration / totalOriginalDuration;

    // Scale each original duration
    const scaledDurations = originalDurations.map(duration => duration * scalingFactor);

    const mainBgColor = getCSSVariableValue('--main-bg-color');

    anime.timeline({
      easing: 'easeInOutSine',
      targets: '#logo',
      complete: finishLoading
    })
    .add({
      targets: '#logo',
      opacity: [0, 1],
      duration: scaledDurations[0],
      easing: 'linear'
    })
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a11',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[1]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[2]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[3]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #a2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[4]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #o',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[5]
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k11',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[6]
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k12',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[7]
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k13',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[8]
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[9]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #k3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[10]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[11]
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f21',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[12]
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f22',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[13]
    }, '-=100')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #f3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[14]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames1',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[15]
    }, '+=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames2',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[16]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames3',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[17]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames4',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[18]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames5',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[19]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames6',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[20]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames7',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[21]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames8',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[22]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo #rames9',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: scaledDurations[23]
    }, '-=50')
    .add({
      easing: 'easeInOutSine',
      targets: '#logo',
      opacity: 0,
      duration: 1000
    }, '+=50')
    .add({
      targets: '#splashScreen',
      backgroundColor: mainBgColor,
      duration: 2000, // Duration over which the color change occurs
      easing: 'linear',  // Use a linear easing for smooth color transition
      endDelay: 1000 // This will wait before hiding the element
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
      backgroundColor: '#77A07E'}}>
      <SplashLogo/>
    </div>
  );
};

export default SplashScreen;