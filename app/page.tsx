"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AppleV3Landing() {
  return (
    <div className="bg-[#FFFFFF] text-[#1D1D1F] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Icons','Helvetica_Neue',Helvetica,Arial,sans-serif] selection:bg-[#0071E3]/20 overflow-x-hidden antialiased">
      {/*  Navigation */}
      <nav className="fixed top-0 z-[100] w-full h-[48px] bg-[rgba(255,255,255,0.8)] backdrop-blur-[20px] border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(0,113,227,0.3)]"></div>
            <span className="text-[17px] font-semibold tracking-tight">KumoHR</span>
          </div>
          <div className="hidden md:flex gap-10 text-[12px] font-normal text-[#1d1d1f] opacity-80">
            <a href="#vision" className="hover:opacity-100 transition-opacity">Vision</a>
            <a href="#systems" className="hover:opacity-100 transition-opacity">Systems</a>
            <a href="#outcomes" className="hover:opacity-100 transition-opacity">Outcomes</a>
          </div>
          <button className="bg-[#0071E3] hover:bg-[#0077ED] text-white text-[12px] px-3.5 py-1 rounded-full font-medium transition-colors shadow-sm">
            Experience
          </button>
        </div>
      </nav>

      <main className="pt-[48px]">
        {/* Cinematic Hero - Massive Typography */}
        <section id="vision" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-48">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="z-10"
          >
            <h2 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-[#1D1D1F] mb-6">Exceptional People Operations.</h2>
            <h1 className="text-[64px] md:text-[120px] font-bold leading-[1.02] tracking-[-0.03em] mb-10 max-w-6xl mx-auto">
              Delivered<br/>
              <span className="bg-gradient-to-b from-[#0071E3] to-[#004A94] bg-clip-text text-transparent">Autonomously.</span>
            </h1>
            <p className="mx-auto mt-12 max-w-[600px] text-[19px] md:text-[24px] font-medium leading-[1.4] text-[#86868b] antialiased">
              Legacy HR records the past. KumoHR engineers the future. The first System of Action for high-velocity founders.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
              <button className="bg-[#0071E3] hover:bg-[#0077ED] text-white text-[19px] px-10 py-4 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-500/20">
                Experience KumoHR
              </button>
              <a href="#" className="text-[#0066cc] text-[19px] font-medium hover:underline flex items-center gap-1.5 group">
                Watch the film <span className="text-[16px] group-hover:translate-x-1 transition-transform">▶</span>
              </a>
            </div>
          </motion.div>
          
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[150px]"></div>
             <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gray-100/60 blur-[150px]"></div>
          </div>
        </section>

        {/* Bento Grid - The Apple Product Layout */}
        <section id="systems" className="bg-[#F5F5F7] py-48 px-6">
          <div className="max-w-[1240px] mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[48px] md:text-[72px] font-bold tracking-tight mb-24 text-center"
            >
              The System of Action.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[480px]">
              
              {/* Action Gap - Column 1-7 */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="md:col-span-7 bg-white rounded-[32px] p-16 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-500 border border-[rgba(0,0,0,0.02)]"
              >
                 <div>
                    <h3 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1]">Stop Alerting.<br/>Start Acting.</h3>
                    <p className="mt-8 text-[21px] text-[#86868b] leading-[1.5] max-w-[420px]">
                      We bridge the gap between data and execution. KumoHR anticipates your next move across 150+ countries.
                    </p>
                 </div>
                 <div className="mt-12 -mb-20 -mr-20 flex justify-end">
                    <div className="w-[400px] h-[400px] bg-blue-50/50 rounded-tl-[80px] border-t border-l border-blue-100/50 flex items-center justify-center p-20">
                       <div className="w-full h-1.5 bg-gray-100 rounded-full relative overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            whileInView={{ width: "65%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute left-0 top-0 h-full bg-blue-600 shadow-[0_0_15px_rgba(0,113,227,0.5)]"
                          />
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Global - Column 8-12 */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="md:col-span-5 bg-white rounded-[32px] p-16 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-500 border border-[rgba(0,0,0,0.02)]"
              >
                 <div className="relative z-10">
                    <h3 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1]">150+ Countries.</h3>
                    <p className="mt-8 text-[21px] text-[#86868b] leading-[1.5]">
                      Autonomous execution against real-time local labor laws. Borderless scale.
                    </p>
                 </div>
                 <div className="flex items-center justify-center pt-12">
                   <div className="w-64 h-64 rounded-full border-2 border-gray-100 flex items-center justify-center relative">
                      <div className="w-48 h-48 rounded-full border border-gray-100 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
                      </div>
                      <div className="absolute top-0 right-[20%] w-3 h-3 bg-blue-200 rounded-full"></div>
                   </div>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* The Standard - Cinematic Reveal */}
        <section id="outcomes" className="bg-white py-48 px-6">
          <div className="max-w-[1024px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
               {[
                 { title: 'Surgical Ranking', body: 'Elite talent density via ML-driven performance ranking.', label: '3x Faster' },
                 { title: 'Invisible Payroll', body: 'Zero-touch compliance in 150+ jurisdictions.', label: '99.9% Accurate' },
                 { title: 'Instant Readiness', body: 'Day-one impact through autonomous onboarding.', label: 'Immediate ROI' }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.2, duration: 0.8 }}
                   className="flex flex-col"
                 >
                   <h4 className="text-[28px] font-bold mb-6 tracking-tight">{item.title}</h4>
                   <p className="text-[19px] text-[#86868b] leading-[1.6] flex-1 font-medium">{item.body}</p>
                   <div className="mt-12 text-[#0071E3] font-bold text-[17px] tracking-tight">{item.label}</div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-white py-48 px-6 text-center border-t border-[rgba(0,0,0,0.05)]">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
           >
             <h2 className="text-[56px] md:text-[80px] font-bold tracking-tight mb-12">The Future is Action.</h2>
             <button className="bg-black hover:bg-[#1D1D1F] text-white text-[21px] px-12 py-5 rounded-full font-semibold transition-all shadow-2xl hover:scale-[1.05] active:scale-95">
               Start Your Evolution
             </button>
             <p className="mt-12 text-[#86868b] text-[17px] font-medium tracking-tight">Free to start. Exceptional results only.</p>
           </motion.div>
        </section>
      </main>

      {/*  Footer */}
      <footer className="bg-[#F5F5F7] text-[#6e6e73] pt-24 pb-32 px-6 border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-[1024px] mx-auto text-[13px] font-medium leading-relaxed tracking-tight">
          <div className="pb-12 border-b border-[rgba(0,0,0,0.1)] mb-12">
            <p className="max-w-2xl">1. Metrics based on internal KumoHR data (Apr 2026). KumoHR is an autonomous People OS for high-velocity organizations.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <span>Copyright © 2026 KumoHR. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</a>
              </div>
            </div>
            <div className="text-[#1d1d1f]">United Kingdom</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
