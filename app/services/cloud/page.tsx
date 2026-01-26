'use client';
import React from 'react';
import { Cloud, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';

const CloudPage = () => {
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
            <Cloud className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              Cloud Security Assessment
            </h1>
            <p className="text-xl text-gray-300">
              Security review of cloud environments and configurations (AWS, Azure, GCP), focusing on misconfigurations and access control issues.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg mb-6">
            Cloud security assessments identify misconfigurations and security weaknesses in your cloud infrastructure. We review 
            your AWS, Azure, or GCP environments to ensure proper security controls are in place and configured according to best practices.
          </p>
          <p className="text-gray-300 text-lg">
            Our assessment covers IAM policies, storage security, network configurations, and other cloud-specific security concerns 
            that could lead to data breaches or unauthorized access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What We Test</h3>
            <ul className="space-y-4">
              {[
                'IAM policies and access control',
                'Storage bucket security (S3, Blob, GCS)',
                'Network security groups and firewall rules',
                'Secrets management assessment',
                'Encryption configuration review',
                'Public exposure of resources',
                'Serverless function security',
                'Container and Kubernetes security',
                'Logging and monitoring review',
                'Compliance and governance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Assessment Process</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">1. Environment Review</h4>
                <p className="text-gray-300">Understanding your cloud architecture and services in use.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">2. Configuration Audit</h4>
                <p className="text-gray-300">Reviewing security configurations against best practices.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Access Control Testing</h4>
                <p className="text-gray-300">Assessing IAM policies and privilege management.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">4. Exposure Analysis</h4>
                <p className="text-gray-300">Identifying publicly exposed resources and data.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">5. Remediation Guidance</h4>
                <p className="text-gray-300">Providing actionable recommendations for security improvements.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Secure Your Cloud Environment
          </h2>
          <p className="text-xl text-purple-100 mb-8 text-center max-w-2xl mx-auto">
            Contact us for a comprehensive cloud security assessment.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPage;
