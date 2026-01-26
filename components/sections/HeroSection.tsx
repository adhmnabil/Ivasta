'use client';
import React, { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  animatedWords?: string[];
  uiElements?: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Manual Penetration Testing',
  subtitle = 'Not Just Running a Scanner',
  description = [
    'IVASTA Security is an independent penetration testing consultancy focused on identifying real security risks through manual, context-aware testing.',
    'We prioritize human analysis over automated scanning to uncover issues that directly impact business logic, workflows, and application behavior.'
  ],
  animatedWords = ['Manual', 'Thorough', 'Expert', 'Real', 'Advanced'],
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const textAnimRef = useRef<HTMLSpanElement>(null);
  const uiInteractionRef = useRef<HTMLDivElement>(null);
  const wordIndexRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const [wordContainerWidth, setWordContainerWidth] = useState<number | string>('auto');

  // Calculate max width for word container
useEffect(() => {
  if (!textAnimRef.current) return;

  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'nowrap';
  span.className = 'text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-500';

  textAnimRef.current.appendChild(span);

  let maxWidth = 0;
  animatedWords.forEach(word => {
    span.textContent = word;
    maxWidth = Math.max(maxWidth, span.offsetWidth);
  });

  setWordContainerWidth(maxWidth);


}, [animatedWords]);


  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroTextRef.current) return;
      
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.5;
      const opacity = Math.max(0.3, 1 - scrolled / 500);
      
      heroTextRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      heroTextRef.current.style.opacity = `${opacity}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Word cycling animation
  useEffect(() => {
    const wordElement = textAnimRef.current?.querySelector('.anim-word') as HTMLElement;
    if (!wordElement) return;

    let isAnimating = false;

    const cycleWords = () => {
      if (isAnimating) return;
      isAnimating = true;

      // Fade out and scale down
      wordElement.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in';
      wordElement.style.transform = 'scale(0.5)';
      wordElement.style.opacity = '0';

      setTimeout(() => {
        // Change word
        wordIndexRef.current = (wordIndexRef.current + 1) % animatedWords.length;
        wordElement.textContent = animatedWords[wordIndexRef.current];
        
        // Reset to small scale
        wordElement.style.transition = 'none';
        wordElement.style.transform = 'scale(0.5)';
        
        // Force reflow
        wordElement.offsetHeight;
        
        // Fade in and scale up to normal size
        wordElement.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out';
        wordElement.style.transform = 'scale(1)';
        wordElement.style.opacity = '1';
        
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      }, 500);
    };

    // Start cycling
    const interval = setInterval(cycleWords, 3000);
    
    return () => clearInterval(interval);
  }, [animatedWords]);

  // UI elements floating animation
  useEffect(() => {
    const elements = uiInteractionRef.current?.querySelectorAll('.ui-element');
    if (!elements) return;

    const animateElements = () => {
      elements.forEach((el, idx) => {
        const htmlEl = el as HTMLElement;
        const time = Date.now() / 1000;
        const delay = idx * 0.2;
        const offset = Math.sin(time + delay) * 8;
        
        htmlEl.style.transform = `translateY(${offset}px)`;
      });
      
      animationFrameRef.current = requestAnimationFrame(animateElements);
    };

    animateElements();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="relative mt-3 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/animated_data_network.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      {/* Content */}
      <div ref={heroTextRef} className="relative max-w-6xl mx-auto w-full z-20 transition-all duration-300">
        <div className="text-center">
          {/* Animated Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            <span 
              ref={textAnimRef} 
              style={{ 
                width: wordContainerWidth, 
                display: 'inline-flex', 
                justifyContent: 'center' 
              }}
            >
              <span className="anim-word text-purple-500 inline-block will-change-transform">
                {animatedWords[0]}
              </span>
            </span>{' '}
            {title}
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
            {subtitle}
          </p>
 
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Context-aware security testing that uncovers vulnerabilities automated tools miss
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button className="w-44 px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50">
              Get Started
            </button>
            <button className="w-44 px-8 py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:scale-105">
              View Services
            </button>
          </div>

          {/* UI Elements */}
          {/* <div 
            ref={uiInteractionRef} 
            className="flex justify-center gap-2 sm:gap-3 mt-8 flex-wrap max-w-2xl mx-auto"
          >
            {uiElements.map((element, idx) => (
              <div
                key={idx}
                className="ui-element px-3 py-1.5 bg-purple-600/80 hover:bg-purple-500 rounded-md text-xs sm:text-sm font-medium text-white transition-all duration-300 cursor-default hover:scale-105 will-change-transform shadow-md hover:shadow-purple-500/50 backdrop-blur-sm"
              >
                {element}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;