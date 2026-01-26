'use client';

import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  initials: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "IVASTA Security's manual testing approach uncovered critical business logic flaws that our automated tools completely missed. Their team thinks like real attackers and provided actionable remediation guidance.",
    author: 'John Doe',
    position: 'CEO, TechCorp Inc.',
    initials: 'JD'
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  testimonials = defaultTestimonials 
}) => {
  return (
    <section className="parallax-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900/50 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          What Our <span className="text-purple-500">Clients Say</span>
        </h2>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 md:p-12 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-purple-500 text-5xl leading-none">"</div>
                <p className="text-lg text-gray-300 italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 ml-12">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-500 font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
