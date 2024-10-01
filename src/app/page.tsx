'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShowPreLoad from '@/components/showPreLoad';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

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

  const pageVariants = {
    initial: { opacity: 0, x: '-100%' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '100%' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const overlayVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  };

  const handleNavigation = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(path);
    }, 500); // Adjust this delay to match animation duration
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className='h-screen px-4 overflow-hidden relative'
      style={{ backgroundColor: 'var(--main-bg-color)' }}
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
          <li><button onClick={() => handleNavigation('/about')} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>About Me</button></li>
          <li><button onClick={() => handleNavigation('/')} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Galleries</button></li>
          <li><button onClick={() => handleNavigation('/blog')} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Blog</button></li>
          <li><button onClick={() => handleNavigation('/prints')} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Prints</button></li>
          <li><button onClick={() => handleNavigation('/contact')} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>Contact Me</button></li>
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
            style={{ textShadow: '2px 2px 4px var(--highlight-color)' }}
            variants={textAnimate2(-150)}
          >
            Growth through
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
            style={{ textShadow: '2px 2px 4px var(--highlight-color)' }}
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

      <Link href="/blog" passHref>
        <motion.a className="hover:text-[var(--highlight-color)] transition-colors duration-300">
        </motion.a>
      </Link>

      <motion.div
        className="fixed inset-0 bg-[var(--main-bg-color)] z-50"
        variants={overlayVariants}
        initial="initial"
        animate={isNavigating ? "animate" : "initial"}
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.main>
  );
}