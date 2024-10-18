'use client';

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
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="blog-card-wrapper">
        <motion.div
          className="blog-card cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="title-card">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </div>
          <div className="image-container">
            <Image
              src={post.coverImage}
              alt={post.title}
              layout="responsive" /* Use responsive to maintain aspect ratio */
              width={500}
              height={300}
              className="cover-image"
            />
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
