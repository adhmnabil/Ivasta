'use client';

import { useEffect } from 'react';

interface UseScrollAnimationProps {
  partnersRef: React.RefObject<(HTMLDivElement | null)[]>;
}

export const useScrollAnimation = ({ partnersRef }: UseScrollAnimationProps) => {
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

      // Animate partners on scroll
      const scope = (partnersRef.current && partnersRef.current[0]?.parentElement) || document.body;
      ctx = gsap.context(() => {
        if (partnersRef.current) {
          partnersRef.current.forEach((partner) => {
            if (partner) {
              gsap.from(partner, {
                opacity: 0,
                y: 50,
                scale: 0.8,
                scrollTrigger: {
                  trigger: partner,
                  start: 'top 80%',
                  end: 'top 50%',
                  scrub: 1,
                }
              });
            }
          });
        }

        // Animate all parallax sections
        const sections = document.querySelectorAll('.parallax-section');
        sections.forEach((section) => {
          gsap.from(section, {
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            }
          });
        });
      }, scope);
    };

    loadGSAP();

    return () => {
      // DO NOT revert or kill - let React handle DOM cleanup
      // Any GSAP cleanup causes removeChild errors during navigation
    };
  }, [partnersRef]);
};
