'use client';

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold inline-flex items-center gap-2 mb-4 hover:scale-105 transition-transform">
              <Shield className="text-purple-500" size={28} />
              <span>IVASTA <span className="text-purple-500">Security</span></span>
            </Link>
            <p className="text-gray-400 text-sm">
              Independent penetration testing consultancy focused on real security risks.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-application" className="text-gray-400 hover:text-white transition">
                  Web App Testing
                </Link>
              </li>
              <li>
                <Link href="/services/api" className="text-gray-400 hover:text-white transition">
                  API Testing
                </Link>
              </li>
              <li>
                <Link href="/services/internal" className="text-gray-400 hover:text-white transition">
                  Internal Testing
                </Link>
              </li>
              <li>
                <Link href="/services/external" className="text-gray-400 hover:text-white transition">
                  External Testing
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-gray-400 hover:text-white transition">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/services/vulnerability-scanning" className="text-gray-400 hover:text-white transition">
                  Vulnerability Scanning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Sofia, Bulgaria, EU</li>
              <li>Remote operations worldwide</li>
              <li className="pt-2">
                <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition">
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IVASTA Security. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition hover:scale-110">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition hover:scale-110">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
