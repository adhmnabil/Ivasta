'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseParallaxAnimationProps {
  heroRef: React.RefObject<HTMLElement>;
  heroTextRef: React.RefObject<HTMLDivElement>;
  textAnimRef: React.RefObject<HTMLSpanElement>;
  uiInteractionRef: React.RefObject<HTMLDivElement>;
  animatedWords: string[];
}

export const useParallaxAnimation = ({
  heroRef,
  heroTextRef,
  textAnimRef,
  uiInteractionRef,
  animatedWords,
}: UseParallaxAnimationProps) => {
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const heroElement = heroRef.current;
    const heroTextElement = heroTextRef.current;
    const textAnimElement = textAnimRef.current;
    const uiInteractionElement = uiInteractionRef.current;

    if (!heroElement || !heroTextElement || !textAnimElement || !uiInteractionElement) {
      return;
    }

    const ctx = gsap.context(() => {
      // Hero text parallax
      gsap.to(heroTextElement, {
        y: 200,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Animated word rotation
      const wordElement = textAnimElement.querySelector('.anim-word');
      if (wordElement) {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          onRepeat: () => {
            wordIndexRef.current = (wordIndexRef.current + 1) % animatedWords.length;
            if (wordElement) {
              wordElement.textContent = animatedWords[wordIndexRef.current];
            }
          },
        });

        tl.to(wordElement, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .set(wordElement, { y: 20 })
        .to(wordElement, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }, '+=1.5');
      }

      // UI elements animation
      const elements = uiInteractionElement.querySelectorAll('.ui-element');
      gsap.timeline({
        repeat: -1,
        repeatDelay: 0.3,
      })
      .to(elements, {
        scale: 1.1,
        backgroundColor: '#9333ea',
        duration: 0.4,
        stagger: 0.2,
        ease: 'power2.out',
      })
      .to(elements, {
        scale: 1,
        backgroundColor: '#7c3aed',
        duration: 0.4,
        stagger: 0.2,
        ease: 'power2.in',
      }, '+=0.5');
    }, heroElement); // scope animations to the hero element

    return () => {
      queueMicrotask(() => {
        try {
          ctx.revert();
        } catch (error) {
          // Silently handle cleanup errors during navigation
        }
      });
    }; // cleanup GSAP animations
  }, [animatedWords, heroRef, heroTextRef, textAnimRef, uiInteractionRef]);
};
