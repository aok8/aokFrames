'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  coverImage: string;
  content: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4">
        <span className="text-gray-600">{post.date}</span>
        <span className="mx-2">•</span>
        <span className="text-gray-600">{post.category}</span>
      </div>
      <div className="relative h-64 mb-8">
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="prose prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
