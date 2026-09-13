import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const socialIcons = [
    { name: 'Facebook', src: '/assets/icons/fb.png' },
    { name: 'Instagram', src: '/assets/icons/insta.png' },
    { name: 'LinkedIn', src: '/assets/icons/linkedin.png' },
    { name: 'Shopify', src: '/assets/icons/sopify.png' },
    { name: 'Telegram', src: '/assets/icons/telegram.png' },
    { name: 'TikTok', src: '/assets/icons/tiktok.png' },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#FFFBF7] via-[#FFF5ED] to-[#FFF0E6] overflow-hidden px-6 lg:px-16 py-12 lg:py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex text-[#FF7A00] text-sm">
              {'★'.repeat(5)}
            </div>
            <span className="text-sm font-semibold text-[#333333]">
              Excellent <span className="font-bold">4.8</span> out of 5
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#222222] leading-[1.15] tracking-tight">
            <span className="text-[#FF5722] block mb-1">Best SMM Panel</span>
            in Bangladesh – Fast ,Safe & <br className="hidden sm:inline" />
            Growth in Social Media.
          </h1>

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            SMM is Bangladesh's most reliable & cheap SMM panel for real social media growth. 
            We built this platform for Bangladeshi businesses, creators, and agencies. 
            You get fast delivery, safe methods, and followers that actually stay. No fake bots. 
            No account risks. Just real results. Most panels chase big numbers. We focus on 
            keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-7 py-3 text-sm font-semibold text-[#D84315] border border-[#FFAB91] bg-white rounded-lg hover:bg-[#FFF3E0] hover:border-[#FF5722] transition-all duration-200 shadow-sm">
              View Services
            </button>

            <button className="px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D84315] via-[#E65100] to-[#BF360C] rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200">
              Create an Account
            </button>
          </div>
        </div>

        {/* Right Column: Visual Composition with Fixed Stacking */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex justify-center items-end">
            
            {/* 1. Circle Background (Lowest Layer: z-0) */}
            <div className="absolute bottom-0 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-[#D84315] to-[#FF7A00] rounded-full shadow-2xl z-0" />

            {/* 2. Target Board Graphic (Behind Person: z-10) */}
            <div className="absolute top-15 left-3 sm:top-15 sm:-left-1 w-24 sm:w-40 h-auto z-10 pointer-events-none drop-shadow-xl -rotate-6">
              <Image 
                src="/assets/pic2.png" 
                alt="Target Board" 
                width={160} 
                height={160} 
                className="w-full h-auto object-contain"
              />
            </div>
               <div className="absolute top-50 -left-4 sm:top-60 sm:-left-6 w-30 sm:w-40 h-auto z-10 pointer-events-none drop-shadow-xl -rotate-6">
              <Image 
                src="/assets/pic4.png" 
                alt="Target Board" 
                width={160} 
                height={160} 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* 3. Rocket Graphic (Behind Person: z-10) */}
            <div className="absolute right-0 sm:-right-10 top-1/3 w-28 sm:w-40 h-auto z-10 pointer-events-none drop-shadow-xl rotate-12">
              <Image 
                src="/assets/pic3.png" 
                alt="Rocket" 
                width={160} 
                height={160} 
                className="w-full h-auto object-contain"
              />
            </div>
        

            {/* 4. Model Character Image (In Front of Graphics: z-20) */}
            <div className="relative z-20 w-full h-[115%] flex items-end justify-center pointer-events-none">
              <Image 
                src="/assets/pic1.png" 
                alt="SMM Model" 
                width={500}
                height={600}
                priority
                className="w-auto h-full max-w-none object-contain object-bottom"
              />
            </div>

            {/* 5. Social Media Bar (Top-most Layer: z-30) */}
            <div className="absolute -bottom-6 z-30 flex items-center space-x-2 sm:space-x-3  px-4 sm:px-5 py-2.5">
              {socialIcons.map((icon, index) => (
                <div 
                  key={index} 
                  className="relative w-8 h-8 sm:w-9 sm:h-9 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image 
                    src={icon.src} 
                    alt={icon.name} 
                    width={36} 
                    height={36} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;