'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  // প্রথম প্রশ্নটি বাই-ডিফল্ট ওপেন রাখা হয়েছে (ছবি অনুযায়ী)
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: 'Is buying followers legal in Bangladesh?',
      answer:
        "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
    },
    {
      question: 'What if service is not delivered?',
      answer:
        'If your order is not delivered within the specified timeframe, our automated refund system will cancel the order and return the funds directly to your wallet balance.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Most orders start instantly within 5–15 minutes. Complete delivery time depends on the quantity and service type chosen.',
    },
    {
      question: 'Is Drip feed safer?',
      answer:
        'Yes, Drip Feed allows you to build engagement gradually over time rather than all at once, which mimics natural organic growth.',
    },
    {
      question: 'Can I order daily?',
      answer:
        'Absolutely! You can place daily or scheduled recurring orders for any public profile or post.',
    },
    {
      question: 'Can agencies resell services?',
      answer:
        'Yes, we provide full API integration support so agencies and freelancers can resell our services seamless under their own branding.',
    },
    {
      question: 'Will engagement drop?',
      answer:
        'We offer high-retention services with a automatic refill guarantee period to cover any natural drop in engagement.',
    },
    {
      question: 'Which platform is best for business in BD?',
      answer:
        'Facebook and YouTube are currently the highest-performing platforms for Bangladeshi audiences, followed closely by Instagram and TikTok.',
    },
  ];

  // ২-কলামে ডাটা ভাগ করা (ছবি অনুযায়ী বাম এবং ডানের সারিতে সাজানোর জন্য)
  const leftColumnFaqs = faqData.filter((_, idx) => idx % 2 === 0);
  const rightColumnFaqs = faqData.filter((_, idx) => idx % 2 !== 0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqCard = (item, originalIndex) => {
    const isOpen = openIndex === originalIndex;

    return (
      <motion.div
        key={originalIndex}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-4"
      >
        <div
          onClick={() => toggleAccordion(originalIndex)}
          className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 overflow-hidden ${
            isOpen
              ? 'bg-[#D35400] text-white border-[#D35400] shadow-lg shadow-orange-600/20'
              : 'bg-[#F5F5F5] text-[#111111] border-[#FF8C32]/40 hover:border-[#FF7A00]'
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-sm sm:text-base font-bold ${isOpen ? 'text-white' : 'text-[#222222]'}`}>
              {item.question}
            </h3>

            {/* Chevron Arrow Icon */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 shrink-0 text-xs"
            >
              ▲
            </motion.div>
          </div>

          {/* Accordion Smooth Expand/Collapse */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-1 border-t border-white/20">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          {/* Badge & Line */}
          <div className="inline-flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              FAQ
            </span>
            <div className="w-14 h-[2px] bg-[#FF7A00] mt-1 relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] absolute -top-[3px] left-1/2 -translate-x-1/2"></span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
            Frequently Asked <span className="text-[#FF7A00]">Questions</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-lg mx-auto">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </motion.div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {/* Left Column */}
          <div>
            {leftColumnFaqs.map((item, index) => renderFaqCard(item, index * 2))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnFaqs.map((item, index) => renderFaqCard(item, index * 2 + 1))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;