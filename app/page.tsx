"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function MobileOptimizedV6() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#030303] text-[#F5F5F7] font-['Inter',sans-serif] selection:bg-[#0071E3]/30 overflow-x-hidden antialiased">
      {/*  Responsive Glass Navigation */}
      <nav className="fixed top-0 z-[100] w-full h-[60px] md:h-[72px] bg-[rgba(3,3,3,0.7)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-2.5 md:gap-3 cursor-pointer group">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-md bg-[#0071E3] shadow-[0_0_20px_rgba(0,113,227,0.6)] group-hover:rotate-12 transition-all"></div>
            <span className="text-[18px] md:text-[20px] font-bold tracking-tight text-white">KumoHR</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 lg:gap-12 text-[13px] font-medium tracking-wide text-gray-400">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-white hover:bg-gray-100 text-[#030303] text-[12px] md:text-[13px] px-4 md:px-5 py-1.5 md:py-2 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Experience →
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[60px] left-0 w-full bg-[#030303] border-b border-white/5 p-8 flex flex-col gap-6 md:hidden"
            >
              <a href="#vision" onClick={() => setIsMenuOpen(false)} className="text-[20px] font-bold">Vision</a>
              <a href="#systems" onClick={() => setIsMenuOpen(false)} className="text-[20px] font-bold">Systems</a>
              <a href="#outcomes" onClick={() => setIsMenuOpen(false)} className="text-[20px] font-bold">Outcomes</a>
              <button className="w-full bg-[#0071E3] text-white py-4 rounded-xl font-bold mt-4">Experience KumoHR</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section - Optimized Typography for Mobile */}
        <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-24 px-6">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-[10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-blue-900/30 blur-[120px] delay-700 animate-pulse"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          </div>

          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="z-10 w-full max-w-7xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 md:px-4 py-1.5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-blue-400"
            >
              The System of Action
            </motion.div>
            
            <h1 className="text-[42px] sm:text-[60px] md:text-[90px] lg:text-[110px] font-[900] leading-[1] md:leading-[0.95] tracking-[-0.04em] mb-8 md:mb-12 text-white">
              Exceptional Operations.<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic">Delivered Autonomously.</span>
            </h1>
            
            <p className="mx-auto mt-8 md:mt-12 max-w-[650px] text-[16px] md:text-[20px] lg:text-[22px] font-medium leading-[1.6] text-gray-400/80 antialiased px-4">
              Legacy HR records the past. KumoHR engineers the future. The first System of Action for founders who demand high-velocity alignment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-12 md:mt-16 w-full px-4">
              <button className="w-full sm:w-auto bg-[#0071E3] hover:bg-[#0077ED] text-white text-[16px] md:text-[18px] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold transition-all hover:scale-[1.05] shadow-[0_0_40px_rgba(0,113,227,0.3)]">
                Start Your Evolution
              </button>
              <a href="#" className="text-gray-300 text-[16px] md:text-[18px] font-bold hover:text-white transition-all flex items-center gap-2 group">
                Watch the Blueprint <span className="text-[16px] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid - Mobile Stackable Layout */}
        <section id="systems" className="bg-[#030303] py-24 md:py-48 px-6 md:px-8">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              
              {/* Invisible Payroll - Mobile Optimization */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-8 bg-gradient-to-br from-[#0A0A0A] to-[#030303] rounded-[32px] md:rounded-[40px] p-8 md:p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-white/5 group"
              >
                 <div className="relative z-10">
                    <h3 className="text-[32px] md:text-[56px] font-[900] tracking-tight leading-[1.05] text-white">Stop Alerting.<br/><span className="text-blue-500">Start Acting.</span></h3>
                    <p className="mt-6 md:mt-8 text-[17px] md:text-[20px] text-gray-400 leading-[1.6] max-w-[480px]">
                      Legacy platforms are built to record. KumoHR is built to act. Automating payroll and compliance across 150+ countries.
                    </p>
                 </div>
                 
                 <div className="mt-12 -mb-20 -mr-20 flex justify-end">
                    <div className="w-full max-w-[500px] aspect-video md:aspect-auto md:h-[350px] bg-[#0A0A0A] rounded-tl-[40px] md:rounded-tl-[60px] border-t border-l border-white/10 flex items-center justify-center p-8 md:p-12 overflow-hidden transition-all">
                       <img src="https://sc02.alicdn.com/kf/Ab16c68ec3d8348829e510d05bb225f15z.png" className="w-full h-full object-contain opacity-60" alt="Global Reach" />
                    </div>
                 </div>
              </motion.div>

              {/* Surgical Ranking */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-4 bg-gradient-to-br from-[#0A0A0A] to-[#030303] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-white/5 group min-h-[400px]"
              >
                 <div className="relative z-10">
                    <h3 className="text-[28px] md:text-[40px] font-[900] tracking-tight leading-[1.1] text-white">Surgical<br/>Ranking.</h3>
                    <p className="mt-4 md:mt-6 text-[16px] md:text-[18px] text-gray-400 leading-[1.6]">
                      We rank for technical excellence and cultural velocity. Elite teams, autonomously.
                    </p>
                 </div>
                 
                 <div className="mt-12 relative h-40 md:h-48 w-full flex items-center justify-center p-6 bg-[#0A0A0A] rounded-2xl md:rounded-3xl border border-white/5 transition-all">
                    <img src="https://sc02.alicdn.com/kf/Ab7c87470b8144607a9dfbf5b69bc6437m.png" className="w-full h-full object-contain opacity-50" alt="Surgical Ranking" />
                 </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* The Standard - Mobile List Style */}
        <section id="outcomes" className="bg-[#030303] py-24 md:py-48 px-6 md:px-8 border-t border-white/5">
          <div className="max-w-[1100px] mx-auto">
             <div className="text-center mb-16 md:mb-32">
                <h2 className="text-[36px] md:text-[72px] font-[900] tracking-tight text-white mb-6">Engineering Excellence.</h2>
                <div className="h-1 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
               {[
                 { title: '99.9% Accuracy', body: 'Autonomous execution across every major jurisdiction.', label: 'Invisible Payroll' },
                 { title: 'Day-One Impact', body: 'Contracts and hardware delivered before they even start.', label: 'Onboarding' },
                 { title: 'Surgical Clarity', body: 'Predictive analytics for high-stakes leadership.', label: 'Nerve Center' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col group">
                   <div className="text-[11px] md:text-[13px] font-bold text-blue-500 uppercase tracking-widest mb-4 md:mb-6 opacity-60">{item.label}</div>
                   <h4 className="text-[24px] md:text-[32px] font-bold mb-4 md:mb-6 tracking-tight text-white">{item.title}</h4>
                   <p className="text-[16px] md:text-[19px] text-gray-400 leading-[1.6] flex-1 font-medium">{item.body}</p>
                   <div className="mt-8 md:mt-12 h-0.5 w-12 bg-gray-800 transition-all group-hover:w-full group-hover:bg-blue-600"></div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Final CTA - Mobile Responsive */}
        <section className="bg-[#030303] text-white py-32 md:py-64 px-6 md:px-8 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[150px] pointer-events-none"></div>
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative z-10 w-full"
           >
             <h2 className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] font-[900] tracking-[-0.05em] mb-8 md:mb-12 text-white">The Future is Action.</h2>
             <p className="text-gray-400 text-[18px] md:text-[24px] mb-12 md:mb-16 max-w-3xl mx-auto font-medium px-4">Join the founders building high-velocity organizations on the first autonomous People OS.</p>
             <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#030303] text-[18px] md:text-[20px] px-12 md:px-16 py-4 md:py-6 rounded-full font-[900] transition-all hover:scale-[1.05] shadow-[0_0_50px_rgba(255,255,255,0.2)]">
               Experience KumoHR Now
             </button>
             <div className="mt-12 md:mt-16 text-gray-500 text-[12px] font-bold tracking-widest uppercase">Version 6.0 — Mobile Optimized</div>
           </motion.div>
        </section>
      </main>

      <footer className="bg-[#030303] text-gray-500 pt-16 md:pt-32 pb-24 md:pb-48 px-6 md:px-8 border-t border-white/5 relative z-20">
        <div className="max-w-[1100px] mx-auto text-[13px] font-semibold leading-relaxed tracking-tight">
          <div className="pb-12 md:pb-16 border-b border-white/5 mb-12 md:mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="sm:col-span-2">
              <div className="text-xl font-bold text-white mb-6">KumoHR</div>
              <p className="max-w-[320px] text-gray-400">KumoHR is the first autonomous People OS for high-velocity teams. Engineering exceptional outcomes globally.</p>
            </div>
            <div>
              <div className="text-white mb-4 md:mb-6 uppercase tracking-widest">Platform</div>
              <div className="flex flex-col gap-3 md:gap-4">
                <a href="#vision" className="hover:text-white transition-colors">Vision</a>
                <a href="#systems" className="hover:text-white transition-colors">Systems</a>
                <a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a>
              </div>
            </div>
            <div>
              <div className="text-white mb-4 md:mb-6 uppercase tracking-widest">Legal</div>
              <div className="flex flex-col gap-3 md:gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
            <span>© 2026 KumoHR. All rights reserved.</span>
            <div className="text-white bg-blue-600 px-3 py-1 rounded-md text-[11px] uppercase tracking-widest">United Kingdom</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
