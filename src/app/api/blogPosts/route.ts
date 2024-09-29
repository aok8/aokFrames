import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'src/blogposts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      content: content,
    };
  });

  return NextResponse.json(posts);
}
