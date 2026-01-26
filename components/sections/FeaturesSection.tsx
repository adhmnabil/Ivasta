'use client';

import React from 'react';
import { CheckCircle, Eye, Server, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: CheckCircle,
    title: 'Manual-First Approach',
    description: 'Rather than relying primarily on vulnerability scanners, we apply a proven manual approach refined over years of hands-on experience.'
  },
  {
    icon: Eye,
    title: 'Real Attacker Mindset',
    description: 'Our assessments simulate real-world attacker behavior, enabling us to identify vulnerabilities before they can be exploited.'
  },
  {
    icon: Server,
    title: 'Actionable Guidance',
    description: 'We deliver actionable findings with clear remediation guidance, helping teams fix issues efficiently and effectively.'
  }
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  features = defaultFeatures 
}) => {
  return (
    <section className="parallax-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900/50 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          What Sets Us <span className="text-purple-500">Apart</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:scale-105 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-purple-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
