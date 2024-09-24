'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShowPreLoad from '@/components/showPreLoad';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';
import { motion } from 'framer-motion';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const bgAnimate = {
    hidden: {
      clipPath: 'polygon(21% 26%, 77% 26%, 77% 77%, 21% 77%)',
    },
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        delay: 1,
      },
    },
  };

  const textAnimate1 = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const textAnimate2 = (i: number) => ({
    hidden: {
      x: 0,
    },
    show: {
      x: i,
      transition: {
        ease: 'easeOut',
        duration: 0.8,
      },
    },
  });

  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 3.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageAnimateChild = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const navAnimate = {
    hidden: {
      y: '-110%',
    },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2,
      },
    },
  };

  const textParagraph = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2.8,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5, // Adjust duration as needed
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.main
      className='h-screen px-4 overflow-hidden'
      style={{ backgroundColor: 'var(--main-bg-color)' }}
      variants={fadeIn}
      initial='hidden'
      animate='show'
    >
      <motion.div
        className='absolute inset-0 w-screen h-screen z-0'
        variants={bgAnimate}
        initial='hidden'
        animate='show'
      >
        <Image
          src='/img/bg.jpg'
          alt='background'
          fill
          sizes='(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw'
          priority={true}
          className='object-cover brightness-50'
        />
      </motion.div>

      <motion.nav
        className='flex justify-between items-center text-white relative z-10 pt-4'
        variants={navAnimate}
        initial='hidden'
        animate='show'
      >
        <div
          className={`text-xl text-[var(--splash-color)] font-bold underline ${pacifico.className}`}
        >
          AOKFrames Photography
        </div>
        <ul className='w-[300px] text-[var(--splash-color)] font-bold flex justify-between items-center text-lg ${pacifico.className}'>
          <li><Link href='/about' className='hover:text-[var(--highlight-color)] transition-colors duration-300'>About Me</Link></li>
          <li><Link href='/' className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Galleries</Link></li>
          <li><Link href='/blog' className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Blog</Link></li>
          <li><Link href='/prints' className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Prints</Link></li>
          <li><Link href='/contact' className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Contact Me</Link></li>
        </ul>
      </motion.nav>

      <div className='relative top-[120px]'>
        <motion.div
          className='relative left-[25%]'
          variants={textAnimate1}
          initial='hidden'
          animate='show'
        >
          <motion.h1
            className={`text-9xl text-[var(--accent-color)] lowercase tracking-tighter font-semibold z-10 ${pacifico.className}`}
            variants={textAnimate2(-150)}
          >
            Learning from
          </motion.h1>
        </motion.div>
        <motion.p
          className={`absolute top-12 right-32 z-10 w-[500px] text-justify leading-5 text-[var(--text-color)] text-lg font-medium ${pacifico.className}`}
          variants={textParagraph}
          initial='hidden'
          animate='show'
        >
          <span className='text-[var(--highlight-color)]'>
            I am a Seattle based photographer shooting both digital and film.
          </span>{' '}
          Photography is an important part of my life, and I'm constantly trying to both improve my skills as well as invoke feelings in others through my work.
        </motion.p>
        <motion.div
          className='relative left-[25%]'
          variants={textAnimate1}
          initial='hidden'
          animate='show'
        >
          <motion.h1
            className='text-9xl text-[var(--splash-color)] font-semibold tracking-tighter z-10 ${pacifico.className}'
            variants={textAnimate2(100)}
          >
            EXPERIENCE
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className='flex gap-4 absolute bottom-4'
        variants={imageAnimate}
        initial='hidden'
        animate='show'
      >
        <motion.div
          className='relative w-[300px] h-[200px]'
          variants={imageAnimateChild}
        >
          <Image
            src='/img/img-1.jpg'
            alt='img-1'
            fill
            sizes='(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw'
            className='object-cover rounded-sm saturate-150'
          />
        </motion.div>
        <motion.div
          className='relative w-[300px] h-[200px]'
          variants={imageAnimateChild}
        >
          <Image
            src='/img/img-2.jpg'
            alt='img-2'
            fill
            sizes='(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw'
            className='object-cover rounded-sm saturate-150'
          />
        </motion.div>
        <motion.div
          className='relative w-[300px] h-[200px]'
          variants={imageAnimateChild}
        >
          <Image
            src='/img/img-3.jpg'
            alt='img-3'
            fill
            sizes='(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw'
            className='object-cover rounded-sm saturate-150'
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}