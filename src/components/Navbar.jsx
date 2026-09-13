import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'API', href: '#' },
  ];

  return (
    <nav className="w-full bg-[#FFFBF7]/80 backdrop-blur-md sticky top-0 z-50 px-6 lg:px-16 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo Component */}
        <div className="flex items-center">
          <Logo width={190} height={48} />
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  link.active
                    ? 'text-[#FF5722]'
                    : 'text-[#4A3E3D] hover:text-[#FF5722]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Sign In Button */}
          <button className="px-5 py-2 text-sm font-semibold text-[#5D4037] bg-white border border-[#E0D7D5] rounded-lg hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-200 shadow-sm">
            Sign In
          </button>

          {/* Sign Up Button (Gradient Accent) */}
          <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5722] to-[#E65100] rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;