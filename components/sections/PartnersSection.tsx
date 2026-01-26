'use client';
import React, { useRef, useEffect, useState } from 'react';

interface PartnersSectionProps {
  partners?: string[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  partners = ['SecureCorp', 'TechGuard', 'CloudSafe', 'DataShield', 'NetProtect', 'CyberDefense']
}) => {
  const partnersRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [visiblePartners, setVisiblePartners] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = partnersRef.current.findIndex(el => el === entry.target);
          
          if (entry.isIntersecting && index !== -1) {
            setVisiblePartners(prev => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    partnersRef.current.forEach(partner => {
      if (partner) observer.observe(partner);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-12 text-center font-semibold">
          Trusted by leading organizations
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              ref={el => partnersRef.current[index] = el}
              className={`bg-gray-800/30 px-8 py-6 rounded-lg border border-gray-700/50 backdrop-blur-sm hover:scale-110 hover:border-purple-500/50 transition-all duration-500 cursor-pointer ${
                visiblePartners.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <span className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;