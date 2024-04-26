'use client'
import { useState, useEffect } from 'react';
import Preloader from '@/components/preloader';

export default function ShowPreLoad() {
  const [loading, setLoading] = useState(true);
  const [preloaderShown, setPreloaderShown] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        if (!sessionStorage.getItem('preloaderShown')) {
            setLoading(true); // Show preloader only if flag not set
            sessionStorage.setItem('preloaderShown', 'true'); // Set flag after showing preloader
        } else {
            console.log('not showing Preload');
            setLoading(false); // Don't show preloader if flag is set
        }
    }
  }, [preloaderShown]);

  const handlePreloaderComplete = () => {
    // preload complete
    setTimeout(() => {
      setLoading(false);
      setPreloaderShown(true);
    }, 500);
  };

  

  return (
    <div>
    </div>
  );
}
