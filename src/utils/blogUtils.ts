import path from 'path';
import matter from 'gray-matter';
import fs from 'fs/promises';

const postsDirectory = path.join(process.cwd(), 'blogPosts');

let cachedPosts: BlogPost[] | null = null;

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName: string) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as BlogPost),
    };
  }));

  cachedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return cachedPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost & { content: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as BlogPost),
  };
}
