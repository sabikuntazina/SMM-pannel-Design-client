'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GrowthStrategy = () => {
  const growthData = [
    {
      timeframe: 'Weeks 1-2',
      steps: [
        {
          num: '01',
          title: 'What You Do',
          description: 'Use SMM services to build initial followers and engagement',
        },
        {
          num: '02',
          title: 'Why it Works',
          description: 'Creates baseline credibility and improves first impression',
        },
        {
          num: '03',
          title: 'Estimated Cost/Time',
          description: '৳2,000–5,000',
        },
      ],
    },
    {
      timeframe: 'Weeks 3-4',
      steps: [
        {
          num: '01',
          title: 'What You Do',
          description: 'Start posting consistent, high-quality content',
        },
        {
          num: '02',
          title: 'Why it Works',
          description: 'Larger follower base increases organic engagement',
        },
        {
          num: '03',
          title: 'Estimated Cost/Time',
          description: 'Mostly content effort',
        },
      ],
    },
    {
      timeframe: 'Months 2-3',
      steps: [
        {
          num: '01',
          title: 'What You Do',
          description: 'Continue content + light support if needed',
        },
        {
          num: '02',
          title: 'Why it Works',
          description: 'Faster reach, better algorithm response',
        },
        {
          num: '03',
          title: 'Estimated Cost/Time',
          description: 'Reduced SMM usage',
        },
      ],
    },
    {
      timeframe: 'Months 3-6',
      steps: [
        {
          num: '01',
          title: 'What You Do',
          description: 'Focus mainly on organic growth',
        },
        {
          num: '02',
          title: 'Why it Works',
          description: 'Strong engagement pushes content naturally',
        },
        {
          num: '03',
          title: 'Estimated Cost/Time',
          description: 'Minimal or no SMM needed',
        },
      ],
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const stepCardVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (customIndex) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, delay: customIndex * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <section className="w-full bg-[#FFFBF7] py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="w-8 h-[2px] bg-[#FF7A00]/40"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              GROWTH
            </span>
            <span className="w-8 h-[2px] bg-[#FF7A00]/40"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
            Growing on Social Media in <span className="text-[#FF7A00]">Bangladesh</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-2xl mx-auto">
            The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {growthData.map((column, colIdx) => (
            <motion.div
              key={colIdx}
              variants={columnVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-[#FFAB91]/60 rounded-3xl p-5 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Animated Header Pill Badge */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: colIdx * 0.15 }}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#D84315] text-white text-xs font-bold shadow-sm mb-6"
              >
                {column.timeframe}
              </motion.div>

              {/* Timeline Container */}
              <div className="relative flex flex-col space-y-4">
                
                {/* Animated Vertical Dotted Timeline Line */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: colIdx * 0.15 }}
                  className="absolute left-[34px] top-6 bottom-8 w-[1.5px] border-l-2 border-dashed border-[#FF7A00]/40 pointer-events-none origin-top" 
                />

                {column.steps.map((step, stepIdx) => (
                  <motion.div
                    key={stepIdx}
                    custom={stepIdx}
                    variants={stepCardVariants}
                    whileHover={{ scale: 1.02, x: 2, transition: { duration: 0.2 } }}
                    className="relative bg-[#F9FAFB] rounded-2xl p-4 flex flex-col justify-center space-y-2 border border-gray-100 transition-colors hover:bg-white hover:shadow-sm"
                  >
                    {/* Header Row: Dot, Number, Title */}
                    <div className="flex items-center space-x-2 z-10">
                      <motion.span 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: stepIdx * 0.3 }}
                        className="w-2 h-2 rounded-full bg-[#FF7A00] shrink-0" 
                      />
                      <span className="text-xs font-semibold text-[#FF7A00]/70">
                        {step.num}
                      </span>
                      <h4 className="text-xs font-bold text-[#FF7A00]">
                        {step.title}
                      </h4>
                    </div>

                    {/* Content */}
                    <p className="text-xs text-[#555555] font-normal leading-relaxed pl-4">
                      {step.description}
                    </p>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GrowthStrategy;