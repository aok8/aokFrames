import { getBlogPostBySlug } from '@/utils/blogUtils';
import BlogPostContent from '@/components/BlogPostContent';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  return (
    <main className="container mx-auto px-4 py-8">
      <BlogPostContent post={post} />
    </main>
  );
}
