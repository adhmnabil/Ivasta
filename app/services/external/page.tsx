'use client';
import React from 'react';
import { Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';

const ExternalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="flex items-start gap-8 mb-12">
          <div className="bg-purple-600 p-6 rounded-2xl">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              External Penetration Testing
            </h1>
            <p className="text-xl text-gray-300">
              Evaluation of externally exposed infrastructure to identify attack vectors accessible from the internet.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg mb-6">
            External penetration testing assesses your organization's security posture from an attacker's perspective on the internet. 
            We identify vulnerabilities in your internet-facing infrastructure, applications, and services that could be exploited 
            by external threat actors.
          </p>
          <p className="text-gray-300 text-lg">
            This testing helps you understand what an attacker can discover and exploit without any prior knowledge of your systems, 
            simulating a real-world external attack scenario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What We Test</h3>
            <ul className="space-y-4">
              {[
                'External attack surface mapping',
                'DNS and subdomain enumeration',
                'Exposed service vulnerability testing',
                'Web application gateway testing',
                'VPN and remote access security',
                'Email security assessment',
                'SSL/TLS configuration review',
                'Information disclosure',
                'Cloud storage exposure',
                'Third-party integration security'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Testing Approach</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">1. Reconnaissance</h4>
                <p className="text-gray-300">OSINT gathering and external attack surface mapping.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">2. Service Discovery</h4>
                <p className="text-gray-300">Identifying exposed services and technology stack.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Vulnerability Assessment</h4>
                <p className="text-gray-300">Testing for known and zero-day vulnerabilities.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">4. Exploitation</h4>
                <p className="text-gray-300">Attempting to gain initial access to internal systems.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">5. Impact Assessment</h4>
                <p className="text-gray-300">Documenting potential impact and attack paths.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Assess Your External Security
          </h2>
          <p className="text-xl text-purple-100 mb-8 text-center max-w-2xl mx-auto">
            Get in touch to evaluate your internet-facing attack surface.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalPage;
