import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShowPreLoad from '@/components/showPreLoad';

export default function Home() {
  return (
    <div>
      <main className="Home">
        <Link href="/gallery">Gallery</Link>
      </main>
    </div>
  );
}