"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PrettyV5Landing() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="bg-[#030303] text-[#F5F5F7] font-['Inter',sans-serif] selection:bg-[#0071E3]/30 overflow-x-hidden antialiased">
      {/*  Vibrant Glass Navigation */}
      <nav className="fixed top-0 z-[100] w-full h-[60px] bg-[rgba(3,3,3,0.7)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-8">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded-md bg-[#0071E3] shadow-[0_0_20px_rgba(0,113,227,0.6)] group-hover:rotate-12 transition-all"></div>
            <span className="text-[20px] font-bold tracking-tight text-white">KumoHR</span>
          </div>
          <div className="hidden md:flex gap-12 text-[13px] font-medium tracking-wide text-gray-400">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a>
          </div>
          <button className="bg-white hover:bg-gray-100 text-[#030303] text-[13px] px-5 py-1.5 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Experience →
          </button>
        </div>
      </nav>

      <main>
        {/* Vibrant Mesh Hero - Linear/Stripe Style */}
        <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
          {/* Animated Mesh Background */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/30 blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40 blur-[150px] delay-700 animate-pulse"></div>
             <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[100px] animate-bounce duration-[10s]"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]"></div>
          </div>

          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="z-10 px-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              The System of Action
            </motion.div>
            
            <h1 className="text-[60px] md:text-[110px] font-[900] leading-[0.95] tracking-[-0.04em] mb-12 max-w-7xl mx-auto text-white">
              Exceptional Operations.<br/>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Delivered Autonomously.</span>
            </h1>
            
            <p className="mx-auto mt-12 max-w-[700px] text-[18px] md:text-[22px] font-medium leading-[1.6] text-gray-400/80 antialiased">
              Legacy HR records the past. KumoHR engineers the future. The first System of Action for founders who demand high-velocity alignment.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
              <button className="bg-[#0071E3] hover:bg-[#0077ED] text-white text-[18px] px-12 py-5 rounded-full font-bold transition-all hover:scale-[1.05] active:scale-95 shadow-[0_0_40px_rgba(0,113,227,0.3)]">
                Start Your Evolution
              </button>
              <a href="#" className="text-gray-300 text-[18px] font-bold hover:text-white transition-all flex items-center gap-2 group border-b border-transparent hover:border-white/20 pb-1">
                Watch the Blueprint <span className="text-[16px] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
          
          {/* Subtle Hero Visual Placeholder */}
          <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#030303] to-transparent z-10"></div>
        </section>

        {/* Bento Grid - Pretty World-Class Layout */}
        <section id="systems" className="bg-[#030303] py-48 px-8">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Invisible Payroll - Pretty Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-8 bg-gradient-to-br from-[#0A0A0A] to-[#030303] rounded-[40px] p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-white/5 group"
              >
                 {/* Card Background Glow */}
                 <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700"></div>
                 
                 <div className="relative z-10">
                    <h3 className="text-[40px] md:text-[56px] font-[900] tracking-tight leading-[1.05] text-white">Stop Alerting.<br/><span className="text-blue-500">Start Acting.</span></h3>
                    <p className="mt-8 text-[20px] text-gray-400 leading-[1.6] max-w-[480px]">
                      Legacy platforms are built to record. KumoHR is built to act. Automating payroll and compliance across 150+ countries.
                    </p>
                 </div>
                 
                 <div className="mt-12 -mb-24 -mr-24 flex justify-end">
                    <div className="w-[500px] h-[350px] bg-[#0A0A0A] rounded-tl-[60px] border-t border-l border-white/10 flex items-center justify-center p-12 overflow-hidden group-hover:border-blue-500/30 transition-all">
                       <img src="https://sc02.alicdn.com/kf/Ab16c68ec3d8348829e510d05bb225f15z.png" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-1000" alt="Global Reach" />
                    </div>
                 </div>
              </motion.div>

              {/* Surgical Ranking - Pretty Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 bg-gradient-to-br from-[#0A0A0A] to-[#030303] rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-white/5 group"
              >
                 <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-indigo-600/10 blur-[80px] group-hover:bg-indigo-600/20 transition-all duration-700"></div>
                 
                 <div className="relative z-10">
                    <h3 className="text-[32px] md:text-[40px] font-[900] tracking-tight leading-[1.1] text-white">Surgical<br/>Ranking.</h3>
                    <p className="mt-6 text-[18px] text-gray-400 leading-[1.6]">
                      We rank for technical excellence and cultural velocity. Building elite teams autonomously.
                    </p>
                 </div>
                 
                 <div className="mt-12 relative h-48 w-full flex items-center justify-center p-6 bg-[#0A0A0A] rounded-3xl border border-white/5 group-hover:border-indigo-500/20 transition-all">
                    <img src="https://sc02.alicdn.com/kf/Ab7c87470b8144607a9dfbf5b69bc6437m.png" className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" alt="Surgical Ranking" />
                 </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* The Standard - Pretty Grid */}
        <section id="outcomes" className="bg-[#030303] py-48 px-8 border-t border-white/5">
          <div className="max-w-[1100px] mx-auto">
             <div className="text-center mb-32">
                <h2 className="text-[48px] md:text-[72px] font-[900] tracking-tight text-white mb-6">Engineering Excellence.</h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               {[
                 { title: '99.9% Accuracy', body: 'Autonomous execution across every major jurisdiction.', label: 'Invisible Payroll' },
                 { title: 'Day-One Impact', body: 'Contracts and hardware delivered before they even start.', label: 'Onboarding' },
                 { title: 'Surgical Clarity', body: 'Predictive analytics for high-stakes leadership.', label: 'Nerve Center' }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.2, duration: 0.8 }}
                   className="flex flex-col group"
                 >
                   <div className="text-[13px] font-bold text-blue-500 uppercase tracking-widest mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</div>
                   <h4 className="text-[32px] font-bold mb-6 tracking-tight text-white">{item.title}</h4>
                   <p className="text-[19px] text-gray-400 leading-[1.6] flex-1 font-medium">{item.body}</p>
                   <div className="mt-12 h-0.5 w-12 bg-gray-800 group-hover:bg-blue-600 transition-all group-hover:w-full"></div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Final CTA - Vibrant Reveal */}
        <section className="bg-[#030303] text-white py-64 px-8 text-center relative overflow-hidden">
           {/* CTA Background Mesh */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[200px] pointer-events-none"></div>
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative z-10"
           >
             <h2 className="text-[64px] md:text-[120px] font-[900] tracking-[-0.05em] mb-12 text-white">The Future is Action.</h2>
             <p className="text-gray-400 text-[24px] mb-16 max-w-3xl mx-auto font-medium">Join the founders building high-velocity organizations on the first autonomous People OS.</p>
             <button className="bg-white hover:bg-gray-100 text-[#030303] text-[20px] px-16 py-6 rounded-full font-black transition-all hover:scale-[1.05] active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
               Experience KumoHR Now
             </button>
             <div className="mt-16 text-gray-500 text-[14px] font-bold tracking-widest uppercase">Version 5.0 — The Excellence Standard</div>
           </motion.div>
        </section>
      </main>

      {/*  Vibrant Footer */}
      <footer className="bg-[#030303] text-gray-500 pt-32 pb-48 px-8 border-t border-white/5 relative z-20">
        <div className="max-w-[1100px] mx-auto text-[13px] font-semibold leading-relaxed tracking-tight">
          <div className="pb-16 border-b border-white/5 mb-16 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-2">
              <div className="text-xl font-bold text-white mb-6">KumoHR</div>
              <p className="max-w-[320px]">KumoHR is the first autonomous People OS for high-velocity teams. Engineering exceptional outcomes globally.</p>
            </div>
            <div>
              <div className="text-white mb-6 uppercase tracking-widest">Platform</div>
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors">Vision</a>
                <a href="#" className="hover:text-white transition-colors">Systems</a>
                <a href="#" className="hover:text-white transition-colors">Outcomes</a>
              </div>
            </div>
            <div>
              <div className="text-white mb-6 uppercase tracking-widest">Legal</div>
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <span>© 2026 KumoHR. All rights reserved.</span>
            <div className="text-white bg-blue-600 px-3 py-1 rounded-md text-[11px] uppercase tracking-widest">United Kingdom</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
