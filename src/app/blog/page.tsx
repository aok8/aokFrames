'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/utils/blogUtils';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8 blog-background">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
