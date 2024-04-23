import Link from 'next/link';
import Image from 'next/image';
import DynamicYears from '@/components/DynamicYears';

export default function Gallery() {
  return (
    <main className="Gallery">
      <div>
        <h1>Gallery Page</h1>
        <Link href="/">Back to Home</Link>
        <DynamicYears/>
      </div>
    </main>
  );
}