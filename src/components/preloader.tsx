import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import '@/styles/globals.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const text = "AOKFrames";
    const controls = useAnimation();
    const backgroundControls = useAnimation();
    const loadingPageColor = "#282828";
    const textColor = "#f1efe9";

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: 0.70 * i },
        }),
        exit: { opacity: 0, transition: {duration: 1}}
      };
    
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: -20,
          y: 10,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };


    useEffect(() => {
        controls.start('visible').then(() => {
            setTimeout(() => {
                controls.start('exit').then(() => {
                  setTimeout(() => {
                    backgroundControls.start({ opacity: 0, transition: { duration: 3.5 } }).then(() => {
                      onComplete();
                    });
                  }, 1000);
                }); 
            }, 1000);
        })
    }, [controls, backgroundControls, onComplete]);
    return (
      <motion.div
        initial={{ backgroundColor: loadingPageColor, opacity: 1 }} // Grey background
        animate={backgroundControls}
        className='fixed top-0 left-0 w-full h-full flex justify-center items-center'
      >
        <div className='container h-screen mx-auto flex flex-col items-center justify-center'>
            <motion.div
                style={{ overflow: "hidden", display: "flex", fontSize: "2rem" , color: textColor}}
                variants={container}
                initial="hidden"
                animate={controls}
                exit= "exit"
            >
                {text.split("").map((letter, index) => (
                    <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
      </motion.div>
      );
};

export default Preloader;