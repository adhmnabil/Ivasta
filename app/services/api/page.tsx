'use client';
import React from 'react';
import { Code, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';

const APIPage = () => {
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
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              API Penetration Testing
            </h1>
            <p className="text-xl text-gray-300">
              In-depth testing of APIs, including authorization flaws, broken object level access, rate limiting issues, and abuse of application logic.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg mb-6">
            API security testing focuses on identifying vulnerabilities specific to RESTful APIs, GraphQL endpoints, and other API implementations. 
            Our testing methodology is based on the OWASP API Security Top 10 and real-world API exploitation techniques.
          </p>
          <p className="text-gray-300 text-lg">
            We test for authorization flaws, excessive data exposure, rate limiting issues, and business logic abuse scenarios that could 
            lead to unauthorized access, data leakage, or service disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What We Test</h3>
            <ul className="space-y-4">
              {[
                'Broken object level authorization (BOLA)',
                'Broken authentication mechanisms',
                'Broken function level authorization',
                'Excessive data exposure',
                'Mass assignment vulnerabilities',
                'Security misconfiguration',
                'Injection vulnerabilities',
                'Rate limiting and resource exhaustion',
                'API business logic abuse',
                'Improper assets management'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Testing Methodology</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">1. API Discovery</h4>
                <p className="text-gray-300">Mapping API endpoints, parameters, and authentication mechanisms.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">2. Authorization Testing</h4>
                <p className="text-gray-300">Testing horizontal and vertical privilege escalation scenarios.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Data Validation</h4>
                <p className="text-gray-300">Testing input validation and injection attack vectors.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">4. Rate Limiting</h4>
                <p className="text-gray-300">Assessing resource exhaustion and abuse scenarios.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">5. Logic Abuse</h4>
                <p className="text-gray-300">Identifying business logic flaws specific to API workflows.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Secure Your APIs
          </h2>
          <p className="text-xl text-purple-100 mb-8 text-center max-w-2xl mx-auto">
            Get in touch to discuss comprehensive API security testing.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIPage;
