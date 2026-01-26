'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import logo from '@/public/assets/Logo.png'
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 border-b border-gray-800 bg-gray-900/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo.src} alt="IVASTA Security Logo" className=" w-20" />
            <div className='hidden md:flex items-center gap-6'>
          <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
            >
              <Link href="/services" className="text-gray-300 hover:text-white transition flex items-center gap-1">
                Our Services
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  href="/services" 
                  className="block px-4 py-2 text-purple-400 hover:text-purple-300 hover:bg-gray-800 transition font-semibold border-b border-gray-800"
                >
                  All Services
                </Link>
                <Link 
                  href="/services/web-application" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  Web Application Testing
                </Link>
                <Link 
                  href="/services/api" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  API Testing
                </Link>
                <Link 
                  href="/services/internal" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  Internal Testing
                </Link>
                <Link 
                  href="/services/external" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  External Testing
                </Link>
                <Link 
                  href="/services/cloud" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  Cloud Security
                </Link>
                <Link 
                  href="/services/vulnerability-scanning" 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                >
                  Vulnerability Scanning
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
  
            <Link 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition font-semibold hover:scale-105 transform"
            >
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-300" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <Link href="/" className="block py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link 
                  href="/services" 
                  className="flex-1 py-2 text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Services
                </Link>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-gray-300 hover:text-white"
                >
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-2">
                  <Link 
                    href="/services" 
                    className="block py-1 text-purple-400 hover:text-purple-300 text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/services/web-application" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Application Testing
                  </Link>
                  <Link 
                    href="/services/api" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    API Testing
                  </Link>
                  <Link 
                    href="/services/internal" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Internal Testing
                  </Link>
                  <Link 
                    href="/services/external" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    External Testing
                  </Link>
                  <Link 
                    href="/services/cloud" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cloud Security
                  </Link>
                  <Link 
                    href="/services/vulnerability-scanning" 
                    className="block py-1 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vulnerability Scanning
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
