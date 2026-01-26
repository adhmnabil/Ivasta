'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export interface Service {
  title: string;
  description: string;
  link?: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: 'Web Application Penetration Testing',
    description: 'Manual testing of web applications with a focus on business logic flaws, authentication and authorization issues, and real-world exploitation scenarios.',
    link: '/services/web-application'
  },
  {
    title: 'API Penetration Testing',
    description: 'In-depth testing of APIs, including authorization flaws, broken object level access, rate limiting issues, and abuse of application logic.',
    link: '/services/api'
  },
  {
    title: 'Internal Penetration Testing',
    description: 'Assessment of internal networks, Active Directory environments, and internal services to identify lateral movement and privilege escalation paths.',
    link: '/services/internal'
  },
  {
    title: 'External Penetration Testing',
    description: 'Evaluation of externally exposed infrastructure to identify attack vectors accessible from the internet.',
    link: '/services/external'
  },
  {
    title: 'Cloud Security Assessment',
    description: 'Security review of cloud environments and configurations (AWS, Azure, GCP), focusing on misconfigurations and access control issues.',
    link: '/services/cloud'
  },
  {
    title: 'Vulnerability Scanning',
    description: 'Targeted vulnerability scanning towards internal or external systems with comprehensive reporting of scanner vulnerabilities.',
    link: '/services/vulnerability-scanning'
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  services = defaultServices 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(scrollContainer.children) as HTMLElement[];
      
      // Set initial state for all cards
      gsap.set(cards, {
        opacity: 0,
        x: 100,
        scale: 0.9,
      });

      // Create staggered animation for each card
      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
            onUpdate: (self) => {
              if (index === cards.length - 1) {
                setScrollProgress(self.progress);
              }
            },
          },
        });

        // Add a subtle rotation effect on hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [services.length]);

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="min-h-screen w-full bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Our <span className="text-purple-500">Services</span>
          </h2>
        </div>

        <div className="space-y-8">
          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="h-full"
              >
                <div className="h-full bg-gray-800/40 p-8 sm:p-12 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-2xl flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-600/20 min-w-[3rem] h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-500 font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400 leading-snug min-h-[3.5rem] flex items-center">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-xl mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link || '#contact'}
                    className="text-purple-500 hover:text-purple-400 inline-flex items-center gap-2 text-lg font-semibold group mt-auto"
                  >
                    Learn more 
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;