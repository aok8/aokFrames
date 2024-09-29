'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface BlogPost {
  slug: string;
  title: string;
  content: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blogPosts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          console.error('Error fetching posts:', error);
        } else {
          setError('An unknown error occurred');
          console.error('Unknown error:', error);
        }
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const togglePost = (slug: string) => {
    setExpandedPosts((prevExpandedPosts) => {
      const newExpandedPosts = new Set(prevExpandedPosts);
      if (newExpandedPosts.has(slug)) {
        newExpandedPosts.delete(slug);
      } else {
        newExpandedPosts.add(slug);
      }
      return newExpandedPosts;
    });
  };

  const topBarAnimate = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: '100%' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100%' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const overlayVariants = {
    initial: { x: 0 },
    animate: { x: '100%' },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen p-8 relative"
      style={{ backgroundColor: 'var(--main-bg-color)' }}
    >
      {!hidden && (
        <motion.div
          className='fixed top-0 left-0 right-0 z-50 bg-[var(--secondary-color)] py-2'
          variants={topBarAnimate}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <div className="w-full pr-4">
            <ul className={`flex flex-wrap justify-end text-[var(--text-color)] font-bold text-sm ${pacifico.className}`}>
              {[
                { href: '/', text: 'Home' },
                { href: '/about', text: 'About Me' },
                { href: '/galleries', text: 'Galleries' },
                { href: '/blog', text: 'Blog' },
                { href: '/prints', text: 'Prints' },
                { href: '/contact', text: 'Contact' }
              ].map((link, index, array) => (
                <li key={link.href} className={index === array.length - 1 ? 'pl-1' : 'px-1'}>
                  <Link href={link.href} className='hover:text-[var(--highlight-color)] transition-colors duration-300'>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
      <motion.h1 
        className="text-4xl font-bold mb-8 mt-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Blog Posts
      </motion.h1>
      <motion.ul className="space-y-4">
        {posts.map((post, index) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + index * 0.1, 
              ease: "easeOut" 
            }}
          >
            <button
              onClick={() => togglePost(post.slug)}
              className="text-xl hover:underline cursor-pointer"
            >
              {post.title}
            </button>
            <AnimatePresence initial={false}>
              {expandedPosts.has(post.slug) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { duration: 0.25, delay: 0.15 }
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { duration: 0.25 }
                    }
                  }}
                  className="mt-4 bg-white bg-opacity-10 p-4 rounded overflow-hidden"
                >
                  <div ref={(el) => { if (el) contentRefs.current[post.slug] = el; }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}