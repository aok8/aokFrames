import Link from 'next/link';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <Link href="/">Back to Home</Link>
      {/* Your gallery content here */}
    </div>
  );
}