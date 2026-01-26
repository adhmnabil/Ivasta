'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import report from '@/public/assets/report.png'

interface SampleReportSectionProps {
  onSubmit?: (name: string, email: string) => void;
}

const SampleReportSection: React.FC<SampleReportSectionProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = '/assets/IVASTA_Security_Sample_Report.pdf';
  link.download = 'IVASTA_Security_Sample_Report.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (loading) return;

  setLoading(true);
  try {
    await emailjs.send(
      'service_q09o09g',      // Service ID
      'template_e2rmbb9',     // Template ID
      {
        name: name,
        email: email,
      },
      'sdgwiRSnj3G4kj8Mi'     // Public key
    );
   downloadPdf();
    alert(`Sample report request sent ✔️`);

    setName('');
    setEmail('');
  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Failed to send request ❌');
  }finally {
    setLoading(false);
  }
};


  return (
    <section className="parallax-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Report Preview */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={report.src}
                alt="Sample Security Assessment Report"
                width={500}
                height={700}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              See What We Can Do For You
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Download a sample penetration test report to see the results<br />
              we can deliver for your organization.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  required
                />
              </div>

             <button
  type="submit"
  disabled={loading}
  className={`bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-semibold transition w-full lg:w-auto flex items-center justify-center gap-3
    ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}
  `}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Processing...
    </>
  ) : (
    'Get the Report'
  )}
</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportSection;
