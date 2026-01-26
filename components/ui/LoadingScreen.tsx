'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Shield } from 'lucide-react';
import PlainLogo from '@/public/assets/singleLogo.png';
const LoadingScreen = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[9999] overflow-hidden">
      <div className="flex items-center gap-8">
        <div className="animate-letter-slide" style={{ animationDelay: '0s' }}>
          <img src={PlainLogo.src} alt="IVASTA Security Logo" className=" w-20" />
          {/* <Shield className="text-purple-500" size={80} /> */}
        </div>
        <div className="flex gap-4">
          {['I', 'V', 'A', 'S', 'T', 'A'].map((letter, index) => (
            <span
              key={index}
              className="text-6xl font-bold text-white animate-letter-slide"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LoadingScreen;
