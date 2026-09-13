'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Advantages = () => {
  const advantagesData = [
    {
      icon: '🔒', // আপনার প্রজেক্টের 3D Icon ইমেজ দিয়ে পরিবর্তন করতে পারেন
      title: 'We Never Ask for Your Password',
      description:
        "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
      highlightText: 'Zero security risk.',
    },
    {
      icon: '🤖',
      title: 'We Use Real Users, Not Bots',
      description:
        "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen. ➔",
    },
    {
      icon: '📈',
      title: 'We Deliver Gradually',
      description:
        'Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.',
    },
    {
      icon: '🏆',
      title: 'Our Track Record',
      description:
        "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full bg-[#FFFBF8] py-28 px-6 lg:px-16 overflow-hidden">
      
      {/* ================= BACKGROUND LAYERS & SIDE SHAPES ================= */}
      
      {/* 1. TOP-LEFT SHAPES (Outer Soft Layer & Inner Darker Orange Layer) */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[400px] bg-[#FFE1CA] rounded-full blur-2xl opacity-70 pointer-events-none" />
      <div 
        className="absolute -top-40 -left-20 w-[650px] h-[350px] bg-[#FFAB66] opacity-80 pointer-events-none"
        style={{ borderRadius: '0% 100% 70% 30% / 0% 40% 60% 100%' }}
      />
      <div 
        className="absolute -top-48 -left-36 w-[600px] h-[380px] bg-[#FF7A00] opacity-90 pointer-events-none"
        style={{ borderRadius: '0% 100% 60% 40% / 0% 30% 70% 100%' }}
      />

      {/* 2. BOTTOM-RIGHT SHAPES (Dual Layer Matching Screenshot) */}
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[400px] bg-[#FFE1CA] rounded-full blur-2xl opacity-70 pointer-events-none" />
      <div 
        className="absolute -bottom-40 -right-20 w-[650px] h-[350px] bg-[#FFAB66] opacity-80 pointer-events-none"
        style={{ borderRadius: '70% 30% 0% 100% / 60% 40% 0% 100%' }}
      />
      <div 
        className="absolute -bottom-48 -right-36 w-[600px] h-[380px] bg-[#FF7A00] opacity-90 pointer-events-none"
        style={{ borderRadius: '60% 40% 0% 100% / 70% 30% 0% 100%' }}
      />

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-3"
        >
          {/* Badge & Line */}
          <div className="inline-flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              ADVANTAGES
            </span>
            <div className="w-16 h-[2px] bg-[#FF7A00] mt-1 relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#FF7A00] absolute -top-[4px] left-1/2 -translate-x-1/2"></span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] pt-1">
            Advantages of using <span className="text-[#FF7A00]">our panel services</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl mx-auto">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </motion.div>

        {/* 2x2 Grid Container with Divider Cross Line */}
        <div className="relative">
          
          {/* Center Cross Divider (Desktops) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1.5px] bg-[#FFE5D4] -translate-y-1/2 pointer-events-none z-0" />
          <div className="hidden md:block absolute top-0 left-1/2 w-[1.5px] h-full bg-[#FFE5D4] -translate-x-1/2 pointer-events-none z-0" />

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10"
          >
            {advantagesData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_15px_45px_rgba(255,122,0,0.06)] hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-orange-50/50 flex flex-col space-y-3"
              >
                {/* 3D Icon */}
                <div className="text-4xl sm:text-5xl select-none mb-2">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#111111]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#666666] font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Green Highlighted Text */}
                {item.highlightText && (
                  <p className="text-xs sm:text-sm font-bold text-[#00C853] pt-1">
                    {item.highlightText}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Advantages;