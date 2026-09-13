'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from 'react-icons/fa';
import { SiSepa } from 'react-icons/si';
import { FiBox } from 'react-icons/fi';

const PaymentMethods = () => {
  // Semi-circle curved positions for payment badges
  const paymentIcons = [
    { id: 1, icon: <FaCcPaypal className="text-[#003087] text-2xl" />, label: 'PayPal', position: 'left-[18%] bottom-[8%]' },
    { id: 2, icon: <FaGooglePay className="text-[#4285F4] text-2xl" />, label: 'GPay', position: 'left-[26%] bottom-[42%]' },
    { id: 3, icon: <SiSepa className="text-[#003399] text-xl font-bold" />, label: 'SEPA', position: 'left-[38%] bottom-[72%]' },
    { id: 4, icon: <FaCcVisa className="text-[#1A1F71] text-3xl" />, label: 'Visa', position: 'left-[50%] -translate-x-1/2 bottom-[88%]' },
    { id: 5, icon: <FaCcMastercard className="text-[#EB001B] text-2xl" />, label: 'Mastercard', position: 'right-[38%] bottom-[72%]' },
    { id: 6, icon: <FiBox className="text-[#111111] text-xl" />, label: 'Other', position: 'right-[26%] bottom-[42%]' },
    { id: 7, icon: <FaApplePay className="text-black text-3xl" />, label: 'Apple Pay', position: 'right-[18%] bottom-[8%]' },
  ];

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-10 max-w-3xl mx-auto"
        >
          {/* Top Badge */}
          <div className="inline-flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A00]">
              PAYMENT METHODS
            </span>
            <div className="flex items-center justify-center space-x-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#FF7A00]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Multiple Payment <span className="text-[#FF7A00]">Methods</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order.
          </p>
        </motion.div>

        {/* Central Graphic Area */}
        <div className="relative w-full max-w-4xl mx-auto h-[320px] sm:h-[400px] flex items-center justify-center">
          
          {/* 1. Background World Map Vector Overlay */}
          <div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full h-full object-contain text-[#FFD6BA]"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              {/* World Map Outline Shapes */}
              <path d="M150,160 Q200,120 280,160 T400,140 T500,180 T680,140 T850,160 T920,200 M180,240 Q260,210 340,260 T520,240 T700,280 T880,240 M220,320 Q300,300 420,340 T650,320 T820,360" stroke="currentColor" strokeWidth="8" strokeDasharray="6 6" fill="none" />
              <circle cx="250" cy="180" r="75" opacity="0.3" />
              <circle cx="480" cy="160" r="110" opacity="0.25" />
              <circle cx="760" cy="200" r="95" opacity="0.3" />
              <circle cx="320" cy="300" r="60" opacity="0.2" />
              <circle cx="850" cy="310" r="50" opacity="0.2" />
            </svg>
          </div>

          {/* 2. Concentric Semi-Circle Arcs */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[620px] h-[150px] sm:h-[250px] lg:h-[310px] pointer-events-none">
            {/* Outer Arc */}
            <div className="absolute inset-0 rounded-t-full border-2 border-orange-200/60 bg-gradient-to-t from-orange-100/30 to-transparent"></div>
            {/* Inner Arc 1 */}
            <div className="absolute top-[20%] left-[10%] right-[10%] bottom-0 rounded-t-full border border-orange-200/50"></div>
            {/* Inner Arc 2 */}
            <div className="absolute top-[40%] left-[20%] right-[20%] bottom-0 rounded-t-full border border-orange-100/60 bg-gradient-to-t from-orange-50/50 to-transparent"></div>
          </div>

          {/* 3. Floating Payment Icons along the Arc */}
          <div className="absolute inset-0 z-10">
            {paymentIcons.map((item) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ duration: 0.4, delay: item.id * 0.08 }}
                className={`absolute ${item.position} cursor-pointer`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_8px_25px_rgba(255,122,0,0.15)] border border-orange-100 flex items-center justify-center transition-all">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 4. Bottom Watermark Typography */}
        <div className="mt-4 sm:mt-6 overflow-hidden">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFE8D6] to-[#FFF5ED] opacity-90 select-none">
            MULTIPLE PAYMENTS
          </h1>
        </div>

      </div>
    </section>
  );
};

export default PaymentMethods;