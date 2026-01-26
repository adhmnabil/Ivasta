'use client';

import React from 'react';
import { Shield, Lock, Eye, Server, Key, AlertTriangle } from 'lucide-react';

const floatingIcons = [
  { Icon: Shield, delay: '0s', duration: '20s', top: '10%', left: '5%' },
  { Icon: Lock, delay: '2s', duration: '25s', top: '20%', left: '85%' },
  { Icon: Eye, delay: '4s', duration: '22s', top: '60%', left: '10%' },
  { Icon: Server, delay: '1s', duration: '28s', top: '70%', left: '80%' },
  { Icon: Key, delay: '3s', duration: '24s', top: '40%', left: '90%' },
  { Icon: AlertTriangle, delay: '5s', duration: '26s', top: '80%', left: '15%' },
];

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '2s' }}
      ></div>
      
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute opacity-10 animate-float"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          <item.Icon size={48} className="text-purple-500" />
        </div>
      ))}

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffects;
