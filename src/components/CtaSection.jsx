'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Banner Card */}
        <div className="relative bg-[#FFF7ED] rounded-[32px] pt-12 pb-12 lg:pb-16 px-8 sm:px-12 lg:px-16 overflow-visible">
          
          {/* Background World Map Vector Pattern */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 pointer-events-none overflow-hidden rounded-[32px]">
            <svg
              className="w-full h-full scale-125 md:scale-100 object-cover text-[#FFC499]"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              {/* World Map Background Vector SVG Simulation */}
              <path
                d="M150,150 Q200,100 250,150 T350,150 T450,120 T550,160 T650,130 T750,170 T850,140 
                   M200,220 Q280,200 320,260 T420,250 T520,280 T680,240 T780,270 
                   M180,320 Q240,300 300,340 T400,320 T600,350 T800,310"
                stroke="currentColor"
                strokeWidth="25"
                strokeDasharray="4 8"
                strokeLinecap="round"
                fill="none"
                opacity="0.35"
              />
              {/* Soft Continent Shapes */}
              <circle cx="280" cy="200" r="70" opacity="0.15" />
              <circle cx="520" cy="180" r="90" opacity="0.15" />
              <circle cx="750" cy="220" r="80" opacity="0.15" />
              <circle cx="350" cy="300" r="50" opacity="0.12" />
              <circle cx="820" cy="310" r="40" opacity="0.12" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-5 text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight sm:leading-tight">
                Ready to Grow Your Social Media <span className="text-[#FF7A00]">in Bangladesh?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl font-normal">
                Join over 68,000 users who are already using SMM to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds.
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3.5 rounded-xl border-2 border-[#FF7A00] text-[#FF7A00] font-bold text-sm bg-transparent hover:bg-[#FF7A00]/5 transition-colors shadow-sm"
                >
                  See All Services
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E65100] to-[#BF3600] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-orange-600/20 transition-all"
                >
                  Create Free Account
                </motion.button>
              </div>
            </motion.div>

            {/* Right Girl Image Column (Overlapping Effect) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Overlapping Image Positioned Outside Top Boundary on Desktop */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] h-[360px] sm:h-[420px] lg:h-[460px] -mt-10 lg:-mt-24 lg:-mb-16">
                <Image
                  src="/assets/pic5.png" // আপনার পিকচারের পাথ (যেমন: public/pic5.png)
                  alt="Ready to Grow Social Media"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaSection;