'use client';
import React from 'react';
import { Shield, Code, Network, Globe, Cloud, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-application',
      title: 'Web Application Penetration Testing',
      description: 'Manual testing of web applications with a focus on business logic flaws, authentication and authorization issues, and real-world exploitation scenarios.',
      icon: Globe,
      link: '/services/web-application',
      features: [
        'Business logic vulnerability testing',
        'Authentication and authorization flaws',
        'Session management testing',
        'Input validation and XSS testing',
        'CSRF and clickjacking assessment',
        'Real-world exploitation scenarios'
      ]
    },
    {
      id: 'api',
      title: 'API Penetration Testing',
      description: 'In-depth testing of APIs, including authorization flaws, broken object level access, rate limiting issues, and abuse of application logic.',
      icon: Code,
      link: '/services/api',
      features: [
        'Broken object level authorization',
        'Broken authentication mechanisms',
        'Excessive data exposure',
        'Rate limiting and resource exhaustion',
        'Mass assignment vulnerabilities',
        'API logic abuse scenarios'
      ]
    },
    {
      id: 'internal',
      title: 'Internal Penetration Testing',
      description: 'Assessment of internal networks, Active Directory environments, and internal services to identify lateral movement and privilege escalation paths.',
      icon: Network,
      link: '/services/internal',
      features: [
        'Active Directory security assessment',
        'Lateral movement path analysis',
        'Privilege escalation testing',
        'Internal service enumeration',
        'Credential harvesting scenarios',
        'Network segmentation review'
      ]
    },
    {
      id: 'external',
      title: 'External Penetration Testing',
      description: 'Evaluation of externally exposed infrastructure to identify attack vectors accessible from the internet.',
      icon: Shield,
      link: '/services/external',
      features: [
        'External attack surface mapping',
        'Exposed service vulnerability testing',
        'Web application gateway testing',
        'VPN and remote access assessment',
        'Email security testing',
        'DNS and subdomain enumeration'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Security Assessment',
      description: 'Security review of cloud environments and configurations (AWS, Azure, GCP), focusing on misconfigurations and access control issues.',
      icon: Cloud,
      link: '/services/cloud',
      features: [
        'Cloud configuration review',
        'IAM and access control assessment',
        'Storage bucket security testing',
        'Network security group review',
        'Secrets management assessment',
        'Multi-cloud environment testing'
      ]
    },
    {
      id: 'vulnerability-scanning',
      title: 'Vulnerability Scanning',
      description: 'Targeted vulnerability scanning towards internal or external systems with comprehensive reporting of scanner vulnerabilities.',
      icon: Search,
      link: '/services/vulnerability-scanning',
      features: [
        'Automated vulnerability identification',
        'CVE-based vulnerability detection',
        'Patch management assessment',
        'Network service scanning',
        'Web application scanning',
        'Prioritized remediation guidance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            IVASTA Security provides comprehensive manual penetration testing services focused on identifying real-world security risks through context-aware analysis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-purple-600 p-4 rounded-xl group-hover:bg-purple-500 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Systems?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our experienced security professionals are ready to help identify vulnerabilities before attackers do.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
