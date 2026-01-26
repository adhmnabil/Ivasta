'use client';
import React from 'react';
import { Globe, ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';

const WebApplicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="flex items-start gap-8 mb-12">
          <div className="bg-purple-600 p-6 rounded-2xl">
            <Globe className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              Web Application Penetration Testing
            </h1>
            <p className="text-xl text-gray-300">
              Manual testing of web applications with a focus on business logic flaws, authentication and authorization issues, and real-world exploitation scenarios.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg mb-6">
            Web application penetration testing is a comprehensive security assessment that goes beyond automated scanning. 
            Our expert testers manually analyze your web application to identify vulnerabilities that directly impact business logic, 
            workflows, and application behavior.
          </p>
          <p className="text-gray-300 text-lg">
            We simulate real attacker behavior to uncover complex vulnerabilities that automated tools typically miss, including 
            authentication bypasses, authorization flaws, business logic abuse, and context-specific security issues.
          </p>
        </div>

        {/* What We Test */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What We Test</h3>
            <ul className="space-y-4">
              {[
                'Business logic vulnerability testing',
                'Authentication and authorization flaws',
                'Session management security',
                'Input validation and injection attacks',
                'Cross-Site Scripting (XSS)',
                'Cross-Site Request Forgery (CSRF)',
                'Insecure direct object references',
                'File upload vulnerabilities',
                'Server-side request forgery (SSRF)',
                'Security misconfiguration'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">1. Reconnaissance</h4>
                <p className="text-gray-300">Understanding application architecture, technology stack, and user workflows.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">2. Threat Modeling</h4>
                <p className="text-gray-300">Identifying potential attack vectors and high-risk functionality.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Manual Testing</h4>
                <p className="text-gray-300">Hands-on security testing focusing on business logic and complex vulnerabilities.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">4. Exploitation</h4>
                <p className="text-gray-300">Demonstrating real-world impact of identified vulnerabilities.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">5. Reporting</h4>
                <p className="text-gray-300">Detailed findings with actionable remediation guidance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Executive Summary</h4>
              <p className="text-gray-300 text-sm">High-level overview of findings for management and stakeholders.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Technical Report</h4>
              <p className="text-gray-300 text-sm">Detailed vulnerability descriptions with proof-of-concept and remediation steps.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Retest Support</h4>
              <p className="text-gray-300 text-sm">Complimentary retest to verify fixes after remediation.</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Ready to Test Your Web Application?
          </h2>
          <p className="text-xl text-purple-100 mb-8 text-center max-w-2xl mx-auto">
            Contact us to discuss your web application security testing needs.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApplicationPage;
