'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaHeadset,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#D34E00] via-[#C43E00] to-[#992D00] text-white pt-16 pb-8 px-6 lg:px-16 overflow-hidden">
      
      {/* Background Geometric Triangle Pattern Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex flex-wrap gap-4 -top-10 -left-10 z-0 select-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[75px] border-b-white/40"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-5">
            {/* White Logo Container Box */}
            <div className="inline-flex items-center justify-center bg-white rounded-xl px-8 py-2.5 shadow-md">
              <span className="text-xl font-extrabold text-[#FF6B00] tracking-wide">
                LOGO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xs">
              SMM is Bangladesh&apos;s most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
                { icon: <FaXTwitter />, href: '#' },
                { icon: <FaLinkedinIn />, href: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white text-sm transition-colors border border-white/20"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-white/90">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Refund Policy'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-white/70 transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Pages */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Services Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-white/90">
              {[
                'Facebook SMM Panel',
                'Instagram SMM Panel',
                'YouTube SMM Panel',
                'TikTok SMM Panel',
                'Telegram SMM Panel',
                'X-Twitter SMM Panel',
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-white/70 transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Contact Info
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0 border border-white/20">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95">
                  info@smmsun.com
                </span>
              </div>

              {/* WhatsApp / Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0 border border-white/20">
                  <FaWhatsapp className="text-base" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95">
                  +1 833 252 278
                </span>
              </div>

              {/* Support */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0 border border-white/20 mt-0.5">
                  <FaHeadset className="text-base" />
                </div>
                <div className="text-xs sm:text-sm text-white/95 font-medium leading-tight pt-1">
                  <p className="font-semibold">Serving all of Bangladesh</p>
                  <p className="text-white/80 text-[11px] pt-0.5">Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Dark Copyright Bar */}
        <div className="mt-4 rounded-2xl bg-[#5E1E00]/80 backdrop-blur-sm py-3.5 px-6 text-center border border-white/10">
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            © 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;