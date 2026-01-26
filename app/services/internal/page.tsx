'use client';
import React from 'react';
import { Network, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';

const InternalPage = () => {
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
            <Network className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              Internal Penetration Testing
            </h1>
            <p className="text-xl text-gray-300">
              Assessment of internal networks, Active Directory environments, and internal services to identify lateral movement and privilege escalation paths.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg mb-6">
            Internal penetration testing simulates an attacker who has gained access to your internal network. This could be through 
            a compromised workstation, social engineering, or physical access to your premises.
          </p>
          <p className="text-gray-300 text-lg">
            We identify paths for lateral movement, privilege escalation opportunities, and security weaknesses in your Active Directory 
            environment that could lead to domain compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What We Test</h3>
            <ul className="space-y-4">
              {[
                'Active Directory security assessment',
                'Lateral movement path analysis',
                'Privilege escalation vulnerabilities',
                'Network segmentation review',
                'Credential harvesting scenarios',
                'Kerberos security issues',
                'SMB and file share security',
                'Internal web applications',
                'Database server security',
                'Service account abuse'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Testing Process</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">1. Network Enumeration</h4>
                <p className="text-gray-300">Identifying live hosts, services, and network architecture.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">2. Vulnerability Discovery</h4>
                <p className="text-gray-300">Identifying exploitable vulnerabilities in internal services.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Lateral Movement</h4>
                <p className="text-gray-300">Testing ability to move between systems and escalate access.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">4. AD Exploitation</h4>
                <p className="text-gray-300">Targeting Active Directory misconfigurations and weaknesses.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">5. Domain Compromise</h4>
                <p className="text-gray-300">Demonstrating paths to domain admin or critical asset access.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Test Your Internal Security
          </h2>
          <p className="text-xl text-purple-100 mb-8 text-center max-w-2xl mx-auto">
            Contact us to assess your internal network security posture.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalPage;
