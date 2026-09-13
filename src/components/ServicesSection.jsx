'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedin, 
  FaTelegram, 
  FaDiscord, 
  FaSpotify, 
  FaSoundcloud, 
  FaSnapchat, 
  FaRocket 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Facebook');

  const platforms = [
    { name: 'Facebook', icon: <FaFacebook className="text-[#1877F2]" /> },
    { name: 'Instagram', icon: <FaInstagram className="text-[#E4405F]" /> },
    { name: 'X (Twitter)', icon: <FaXTwitter className="text-black" /> },
    { name: 'YouTube', icon: <FaYoutube className="text-[#CD201F]" /> },
    { name: 'TikTok', icon: <FaTiktok className="text-black" /> },
    { name: 'LinkedIn', icon: <FaLinkedin className="text-[#0A66C2]" /> },
    { name: 'Telegram', icon: <FaTelegram className="text-[#229ED9]" /> },
    { name: 'Discord', icon: <FaDiscord className="text-[#5865F2]" /> },
    { name: 'Spotify', icon: <FaSpotify className="text-[#1DB954]" /> },
    { name: 'SoundCloud', icon: <FaSoundcloud className="text-[#FF5500]" /> },
    { name: 'Snapchat', icon: <FaSnapchat className="text-[#FFFC00]" /> },
    { name: 'Website Traffic', icon: <FaRocket className="text-[#FF7A00]" /> },
  ];

  const servicePoints = [
    { num: '01', title: 'Facebook Post Likes-', desc: 'Boost post engagement and credibility with real likes.' },
    { num: '02', title: 'Facebook Likes-', desc: 'Grow your page popularity with high-quality likes.' },
    { num: '03', title: 'Facebook Comments-', desc: 'Increase interaction with engaging comments.' },
    { num: '04', title: 'Facebook Shares-', desc: 'Expand your reach with powerful shares.' },
    { num: '05', title: 'Facebook Video Views-', desc: 'Get more visibility with high-retention video views.' },
    { num: '06', title: 'Facebook Reactions-', desc: 'Make your posts more engaging with diverse reactions..' },
  ];

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section Badge & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          
          {/* Badge Layout */}
          <div className="inline-flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A00] underline underline-offset-4 decoration-[#FF7A00]">
              OUR SERVICES
            </span>
            <div className="flex items-center justify-center space-x-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#FF7A00]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tight">
            Powerful <span className="text-[#FF7A00]">SMM Services</span> for Fast Growth
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* Platform Tabs Grid (2 Rows of 6 Buttons) */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {platforms.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#D34E00] text-white border-transparent shadow-md'
                      : 'bg-[#FFF8F3] text-[#333333] border-[#FFE2D1] hover:bg-[#FFEBDC]'
                  }`}
                >
                  <span className={`text-sm ${isActive ? 'text-white' : ''}`}>
                    {tab.icon}
                  </span>
                  <span className="truncate">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Outer Main Border Card */}
        <div className="relative border border-[#FFAB76]/70 rounded-[24px] p-6 sm:p-8 lg:p-10 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Box + Floating 3D Icon */}
            <div className="lg:col-span-5 relative">
              {/* Inner Rocket Card Image (/assets/pic7.png) */}
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#FFF3E8]">
                <Image
                  src="/assets/pic7.png"
                  alt="Growing Rocket"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

             
            </div>

            {/* Right Side Content Details */}
            <div className="lg:col-span-7 space-y-4 pl-0 lg:pl-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Title & Subtext */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#FF7A00] mb-2">
                      {activeTab} Marketing Services
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic {activeTab} marketing campaigns.
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-1">
                    {servicePoints.map((point) => (
                      <div key={point.num} className="flex items-center space-x-2.5 text-xs">
                        <span className="flex items-center justify-center bg-[#D34E00] text-white font-bold text-[10px] w-5 h-5 rounded shrink-0">
                          {point.num}
                        </span>
                        <p className="text-[#333333] leading-snug">
                          <strong className="text-[#FF7A00] font-semibold">{point.title}</strong>{' '}
                          <span className="text-[#555555]">{point.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button className="px-6 py-3 rounded-xl bg-[#D34E00] text-white font-bold text-xs shadow-md hover:bg-[#B84300] transition-colors">
                      View {activeTab} Services
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;