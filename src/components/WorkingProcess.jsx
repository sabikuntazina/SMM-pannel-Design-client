'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WorkingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description:
        'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
      highlighted: true,
    },
    {
      number: '02',
      title: 'Add Funds',
      description:
        'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
      highlighted: false,
    },
    {
      number: '03',
      title: 'Select Service',
      description:
        'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
      highlighted: false,
    },
    {
      number: '04',
      title: 'Place your order',
      description:
        'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
      highlighted: true,
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: 40,
      x: index % 2 === 0 ? -20 : 20,
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative w-full bg-[#FFFBF7] py-24 px-6 lg:px-16 overflow-hidden">
      
      {/* Background Pulse Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFEBDC] to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#FFEBDC] to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-20 space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="w-8 h-[2px] bg-[#FF7A00]/40"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              WORKING PROCESS
            </span>
            <span className="w-8 h-[2px] bg-[#FF7A00]/40"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
            Grow Your <span className="text-[#FF7A00]">Socials</span> in 4 Simple Steps
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.
          </p>
        </motion.div>

        {/* 4 Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-16 items-center">
          
          {/* Center Floating & Pulse Logo Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none"
          >
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full bg-[#FFF3EA] shadow-xl shadow-orange-500/10 flex items-center justify-center border border-[#FFE3D1]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#E64A19] flex items-center justify-center text-white font-black text-xl shadow-md">
                H
              </div>
            </motion.div>

            {/* Pulsing Dots */}
            <motion.div 
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -left-6 w-2 h-2 rounded-full bg-[#FF7A00]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute -right-6 w-2 h-2 rounded-full bg-[#FF7A00]" 
            />
          </motion.div>

          {/* Cards Loop */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative p-8 sm:p-10 rounded-3xl transition-shadow duration-300 ${
                step.highlighted
                  ? 'bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md shadow-[0_10px_40px_rgba(255,122,0,0.06)] border border-white hover:shadow-orange-500/10'
                  : 'bg-transparent'
              }`}
            >
              {step.highlighted && (
                <div className="absolute top-4 left-4 w-16 h-16 bg-[radial-gradient(#FF7A00_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-20 pointer-events-none" />
              )}

              <div className="relative z-10 space-y-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#FF7A00] block tracking-tight">
                  {step.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#FF7A00]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;