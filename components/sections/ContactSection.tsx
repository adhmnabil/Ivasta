'use client';

import React, { useState } from 'react';
import { MapPin, FileText, Clock, Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    note: ''
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate required fields
  const newErrors: Record<string, boolean> = {};
  if (!formData.name) newErrors.name = true;
  if (!formData.email) newErrors.email = true;
  if (!formData.phone) newErrors.phone = true;
  if (!formData.company) newErrors.company = true;
  if (!formData.note) newErrors.note = true;

  setErrors(newErrors);

  if (Object.keys(newErrors).length !== 0) return;
 setLoading(true);
  try {
   const res = await emailjs.send(
      'service_q09o09g',        // your service ID
      'template_0kuspt7',       // your template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        note: formData.note,
      },
      'sdgwiRSnj3G4kj8Mi'        // EmailJS public key
    );
  
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      note: '',
    });
    setConsent(false);
    setErrors({});
  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Failed to send message. Please try again.');
  }finally {
    setLoading(false);
  }
};


  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section 
      id="contact" 
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-500 font-semibold mb-4 text-lg">Contact IVASTA</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your path to a secure business starts here.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Reach out to us by filling out our contact form if you are interested in learning more about our product, services, and pricing for your business.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Sofia, Bulgaria, European Union</h3>
                  <p className="text-gray-400 text-sm">Remote operations worldwide</p>
                </div>
              </div>

              {/* VAT Number */}
              <div className="flex items-start gap-4 bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">VAT Number</h3>
                  <p className="text-gray-400 text-sm">Available upon request</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Monday to Friday</h3>
                  <p className="text-gray-400 text-sm">09:00 to 18:00 EET</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                        errors.name ? 'border-red-400' : 'border-gray-300'
                      } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">Required field</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                        errors.email ? 'border-red-400' : 'border-gray-300'
                      } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">Required field</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                        errors.phone ? 'border-red-400' : 'border-gray-300'
                      } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">Required field</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                        errors.company ? 'border-red-400' : 'border-gray-300'
                      } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                      placeholder="Your company"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">Required field</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Note <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    value={formData.note}
                    onChange={(e) => handleChange('note', e.target.value.slice(0, 500))}
                    rows={4}
                    maxLength={500}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                      errors.note ? 'border-red-400' : 'border-gray-300'
                    } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none`}
                    placeholder="Tell us about your security testing needs..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.note && (
                      <p className="text-red-500 text-xs">Required field</p>
                    )}
                    <p className="text-gray-400 text-xs ml-auto">{formData.note.length} / 500</p>
                  </div>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-purple-600 bg-gray-50 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to IVASTA using my email address to send product updates, promotional offers, and educational content. I understand I may withdraw consent anytime via email or using unsubscribe links.{' '}
                  <a href="#" className="text-purple-600 hover:underline font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
  type="submit"
  disabled={loading}
  className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 transition
    ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}
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
      Sending...
    </>
  ) : (
    <>
      <Send className="w-5 h-5" />
      Send
    </>
  )}
</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
