'use client';

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenis: any;
    let rafId: number;
    let tickerFn: any;

    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const gsap = (await import('gsap')).gsap || (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger || (await import('gsap/ScrollTrigger')).default;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Store ticker function so we can remove it later
      tickerFn = (time: number) => {
        lenis.raf(time * 1000);
      };
      
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    };

    initLenis();

    return () => {
      // Stop animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Clean up GSAP ticker and Lenis without calling destroy()
      const cleanup = async () => {
        try {
          const gsap = (await import('gsap')).gsap || (await import('gsap')).default;
          const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger || (await import('gsap/ScrollTrigger')).default;
          
          // Remove ticker callback
          if (tickerFn) {
            gsap.ticker.remove(tickerFn);
          }
          
          // Remove scroll listener
          if (lenis) {
            lenis.off('scroll', ScrollTrigger.update);
          }
        } catch (e) {
          // Module might not be loaded
        }
      };
      
      cleanup();
    };
  }, []);
};
