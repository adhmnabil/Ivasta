'use client';

import { useEffect } from 'react';

interface UseHorizontalScrollProps {
  servicesRef: React.RefObject<HTMLElement>;
  serviceCardsRef: React.RefObject<HTMLDivElement>;
}

export const useHorizontalScroll = ({ servicesRef, serviceCardsRef }: UseHorizontalScrollProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let gsap: any;
    let ScrollTrigger: any;
    let ctx: any;

    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      gsap = gsapModule.gsap || gsapModule.default;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      
      gsap.registerPlugin(ScrollTrigger);

      if (servicesRef.current && serviceCardsRef.current) {
        const scope = servicesRef.current;
        const cards = gsap.utils.toArray(serviceCardsRef.current.children);
        
        ctx = gsap.context(() => {
          gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: servicesRef.current,
              // pin: true,  // DISABLED - causes DOM conflicts during React navigation
              // pinType: 'transform',
              // pinReparent: true,
              scrub: 1,
              snap: 1 / (cards.length - 1),
              end: () => `+=${serviceCardsRef.current?.offsetWidth || 0}`,
              invalidateOnRefresh: true,
              // anticipatePin: 1,
            }
          });
        }, scope);
      }
    };

    loadGSAP();

    return () => {
      // DO NOT revert or kill - let React handle DOM cleanup
      // Any GSAP cleanup causes removeChild errors during navigation
    };
  }, [servicesRef, serviceCardsRef]);
};
