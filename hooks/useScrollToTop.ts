'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure navigation is complete
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
};
