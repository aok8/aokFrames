'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <motion.div
          className="p-4"
          animate={{ height: isHovered ? 'auto' : '150px' }}
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">{post.date}</p>
          <p className="text-sm text-gray-500 mb-2">{post.category}</p>
          <p className="text-gray-700">{post.excerpt}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
