"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AppleV4Landing() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-[#000000] text-[#FFFFFF] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif] selection:bg-[#0071E3]/30 overflow-x-hidden antialiased">
      {/*  Glass Navigation */}
      <nav className="fixed top-0 z-[100] w-full h-[48px] bg-[rgba(0,0,0,0.72)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(0,113,227,0.5)] group-hover:scale-110 transition-transform"></div>
            <span className="text-[17px] font-semibold tracking-tight">KumoHR</span>
          </div>
          <div className="hidden md:flex gap-10 text-[12px] font-normal text-[#F5F5F7] opacity-80">
            <a href="#vision" className="hover:opacity-100 transition-opacity">Vision</a>
            <a href="#systems" className="hover:opacity-100 transition-opacity">Systems</a>
            <a href="#outcomes" className="hover:opacity-100 transition-opacity">Outcomes</a>
          </div>
          <button className="bg-[#F5F5F7] hover:bg-[#FFFFFF] text-[#1D1D1F] text-[12px] px-3.5 py-1 rounded-full font-medium transition-colors">
            Experience
          </button>
        </div>
      </nav>

      <main>
        {/* Full-Bleed Hero - The Apple iPhone/Mac Style */}
        <section id="vision" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="z-10 px-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[21px] md:text-[28px] font-semibold tracking-tight text-[#86868b] mb-4"
            >
              Exceptional Operations.
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[56px] md:text-[100px] font-bold leading-[1.05] tracking-[-0.03em] mb-10 max-w-6xl mx-auto"
            >
              Delivered<br/>
              <span className="bg-gradient-to-b from-[#FFFFFF] to-[#86868b] bg-clip-text text-transparent">Autonomously.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12"
            >
              <button className="bg-[#0071E3] hover:bg-[#0077ED] text-white text-[19px] px-10 py-4 rounded-full font-semibold transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-blue-500/20">
                Experience KumoHR
              </button>
              <a href="#" className="text-[#0066cc] text-[19px] font-medium hover:underline flex items-center gap-1.5 group">
                Watch the film <span className="text-[16px] group-hover:translate-x-1 transition-transform">▶</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero Image Background (Render of Dashboard) */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://sc02.alicdn.com/kf/A112fb6efea5a4a448b671965d63a71b4U.png" 
               alt="KumoHR Dashboard" 
               className="w-full h-full object-cover opacity-40 mix-blend-lighten"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </section>

        {/* The Action Gap - High-Impact Interstitial */}
        <section id="systems" className="bg-[#FFFFFF] text-[#1D1D1F] py-48 px-6">
          <div className="max-w-[1240px] mx-auto text-center">
             <motion.h2 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="text-[48px] md:text-[80px] font-bold tracking-tight mb-24"
             >
               The System of Action.
             </motion.h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               
               {/* Global Card */}
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-[#F5F5F7] rounded-[40px] p-12 h-[600px] flex flex-col justify-between overflow-hidden group border border-[rgba(0,0,0,0.02)]"
               >
                 <div className="text-left">
                   <h3 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight">150+ Countries.<br/>Borderless Execution.</h3>
                   <p className="mt-6 text-[19px] text-[#86868b] leading-[1.5] max-w-[360px]">
                     Autonomous payroll and compliance across every major jurisdiction. No friction. No manual overhead.
                   </p>
                 </div>
                 <div className="relative mt-12 h-64 w-full flex items-center justify-center">
                   <img 
                     src="https://sc02.alicdn.com/kf/A4bfc7ab865974c4185dc57c7eb9db0c71.png" 
                     className="w-full h-full object-contain opacity-80 group-hover:scale-110 transition-transform duration-1000"
                     alt="Global Reach"
                   />
                 </div>
               </motion.div>

               {/* Talent Card */}
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-[#1D1D1F] text-[#FFFFFF] rounded-[40px] p-12 h-[600px] flex flex-col justify-between overflow-hidden group border border-[rgba(255,255,255,0.05)]"
               >
                 <div className="text-left">
                   <h3 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight">Elite Talent Density.<br/>Surgically Ranked.</h3>
                   <p className="mt-6 text-[19px] text-[#86868b] leading-[1.5] max-w-[360px]">
                     We don't just screen; we rank for technical and cultural excellence. Building high-velocity teams autonomously.
                   </p>
                 </div>
                 <div className="relative mt-12 h-64 w-full flex items-center justify-center p-8 bg-blue-900/10 rounded-3xl">
                    <div className="w-1.5 h-full bg-blue-600/20 rounded-full relative overflow-hidden">
                       <motion.div 
                         initial={{ height: "0%" }}
                         whileInView={{ height: "85%" }}
                         transition={{ duration: 1.5, ease: "easeInOut" }}
                         className="absolute top-0 left-0 w-full bg-blue-600 shadow-[0_0_20px_rgba(0,113,227,0.8)]"
                       />
                    </div>
                    <div className="ml-12 flex-1 space-y-6">
                       <div className="h-2 w-3/4 bg-blue-500/20 rounded-full"></div>
                       <div className="h-2 w-full bg-blue-500/40 rounded-full"></div>
                       <div className="h-2 w-1/2 bg-blue-500/20 rounded-full"></div>
                    </div>
                 </div>
               </motion.div>

             </div>
          </div>
        </section>

        {/* Visionary Section - Image Focused */}
        <section id="outcomes" className="bg-[#FFFFFF] py-48 px-6 text-center">
          <div className="max-w-[1024px] mx-auto">
             <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-[40px] md:text-[64px] font-bold tracking-tight mb-24"
             >
               The Excellence Standard.
             </motion.h2>
             <div className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl mb-24">
               <img 
                 src="https://sc02.alicdn.com/kf/A5bf554a5222048deb320e78556c06a98L.png" 
                 alt="Visionary HR" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-16 text-left">
                  <h4 className="text-[32px] font-bold text-white mb-4 italic">\"KumoHR is the first platform that understands human capital as a high-velocity engine.\"</h4>
                  <p className="text-gray-300 text-[19px]">Founders at Unicorn Scale</p>
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
               {[
                 { title: 'Invisible Payroll', body: '99.9% autonomous accuracy across 150+ countries.', label: 'Zero Error' },
                 { title: 'Day-One Readiness', body: 'Contracts and hardware delivered autonomously.', label: 'Instant Impact' },
                 { title: 'Surgical Analytics', body: 'Predictive clarity for leadership teams.', label: 'Actionable Insights' }
               ].map((item, i) => (
                 <div key={i}>
                   <h5 className="text-[21px] font-bold mb-4">{item.title}</h5>
                   <p className="text-[17px] text-[#86868b] leading-relaxed">{item.body}</p>
                   <div className="mt-6 text-[#0071E3] font-bold text-[15px]">{item.label}</div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Closing CTA - The \"Big Reveal\" */}
        <section className="bg-black text-white py-64 px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
           >
             <h2 className="text-[64px] md:text-[100px] font-bold tracking-[-0.04em] mb-12">The Future is Action.</h2>
             <p className="text-[#86868b] text-[24px] mb-16 max-w-2xl mx-auto">Join the founders engineering high-velocity organizations.</p>
             <button className="bg-white hover:bg-gray-100 text-black text-[21px] px-12 py-5 rounded-full font-semibold transition-all hover:scale-[1.05] active:scale-95 shadow-2xl">
               Start Your Evolution
             </button>
           </motion.div>
        </section>
      </main>

      {/*  Dark Footer */}
      <footer className="bg-black text-[#6e6e73] pt-24 pb-32 px-6 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1024px] mx-auto text-[13px] font-medium leading-relaxed">
          <div className="pb-12 border-b border-[rgba(255,255,255,0.1)] mb-12">
            <p>1. Performance data based on internal KumoHR audits (April 2026). KumoHR is the first autonomous People OS for high-velocity teams.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <span>Copyright © 2026 KumoHR. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
            <div className="text-white">United Kingdom</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
