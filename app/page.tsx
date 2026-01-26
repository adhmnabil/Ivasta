'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PartnersSection from '@/components/sections/PartnersSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SampleReportSection from '@/components/sections/SampleReportSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <SampleReportSection />
      <ContactSection />
    </>
  );
}
