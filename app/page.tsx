import React from 'react';

const GoldenRatioHero = () => {
  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-black selection:bg-blue-100/50 overflow-x-hidden">
      {/* Precision Header */}
      <nav className="fixed top-0 z-[100] flex w-full items-center justify-between border-b border-gray-100/50 bg-white/60 px-10 py-5 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(0,113,227,0.4)]"></div>
          <span className="text-xl font-bold tracking-tight text-black">KumoHR</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[13px] font-medium tracking-wide text-gray-500 uppercase">
          <a href="#systems" className="hover:text-blue-600 transition-colors">Systems</a>
          <a href="#outcomes" className="hover:text-blue-600 transition-colors">Outcomes</a>
          <a href="#manifesto" className="hover:text-blue-600 transition-colors">Manifesto</a>
        </div>
        <button className="group relative overflow-hidden rounded-full bg-black px-7 py-2.5 text-xs font-bold tracking-widest text-white transition-all uppercase hover:shadow-2xl hover:shadow-black/20">
          <span className="relative z-10">Start Evolution</span>
          <div className="absolute inset-0 -translate-x-full bg-blue-600 transition-transform group-hover:translate-x-0"></div>
        </button>
      </nav>

      <main>
        {/* Cinematic Hero - Golden Ratio Spacing */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-[1.618*100px] text-center">
          <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-gray-100/50 blur-[120px]"></div>
          
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mb-8 inline-block rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Introducing the System of Action
            </div>
            <h1 className="mx-auto max-w-5xl text-[clamp(2.5rem,8vw,6.18rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1D1D1F]">
              Exceptional Operations.<br/>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Delivered Autonomously.</span>
            </h1>
            <p className="mx-auto mt-[2.618rem] max-w-2xl text-[1.15rem] leading-[1.618] text-gray-500/80 antialiased md:text-[1.5rem]">
              Legacy HR records what happened. KumoHR engineers what happens next. The first autonomous OS for founders who demand extraordinary alignment.
            </p>
            <div className="mt-[3.618rem] flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="rounded-full bg-blue-600 px-10 py-5 text-[1rem] font-bold text-white shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:bg-blue-700 active:scale-95">
                Experience KumoHR
              </button>
              <button className="text-[1rem] font-semibold text-gray-500 transition-all hover:text-black hover:tracking-wide">
                View the Blueprint →
              </button>
            </div>
          </div>
        </section>

        {/* The Action Gap - Proportional Layout */}
        <section id="systems" className="relative border-y border-gray-100 bg-white py-[6.18rem] md:py-[10rem]">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid gap-[3.618rem] lg:grid-cols-[1.618fr_1fr] items-center">
              <div>
                <h2 className="text-[2.5rem] font-bold tracking-tight md:text-[4.5rem] leading-none">
                  Stop Alerting.<br/>
                  Start Acting.
                </h2>
                <p className="mt-[2.618rem] text-lg leading-[1.618] text-gray-500/80 md:text-xl">
                  Rippling, Deel, and BambooHR were built to record history. KumoHR is built to act in real-time. We bridge the \"Action Gap\" between data and execution, automating the entire talent lifecycle across 150+ countries.
                </p>
                <div className="mt-[3.618rem] grid grid-cols-2 gap-8 border-t border-gray-50 pt-[2.618rem]">
                  <div>
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm font-medium uppercase tracking-widest text-gray-400 mt-2">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm font-medium uppercase tracking-widest text-gray-400 mt-2">Autonomous Accuracy</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[1/1.618] overflow-hidden rounded-[3rem] bg-gray-50 p-1">
                <div className="h-full w-full rounded-[2.8rem] bg-white shadow-inner flex flex-col p-12 justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Excellence Standard - Grid Proportions */}
        <section id="outcomes" className="py-[6.18rem] md:py-[10rem] px-8 bg-[#FBFBFB]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-[6.18rem]">
              <h2 className="text-[2rem] font-bold tracking-tight md:text-[3.5rem]">The Excellence Standard</h2>
              <p className="mt-4 text-gray-500">Engineering high-performance cultures via autonomous systems.</p>
            </div>
            <div className="grid gap-[1.618rem] md:grid-cols-3">
              {[
                { title: 'Surgical Ranking', body: 'Our ML-driven nerve center ranks talent based on technical excellence and organizational fit, ensuring elite talent density from day one.', stat: '3x Faster Hiring' },
                { title: 'Invisible Payroll', body: 'Zero manual oversight. KumoHR executes payroll autonomously against real-time local labor laws in 150+ markets.', stat: '0.01% Error Rate' },
                { title: 'Day-One Readiness', body: 'Contracts, hardware, and access are handled before the employee even joins. Engineering the perfect first impression.', stat: '100% Onboarding ROI' }
              ].map((item, i) => (
                <div key={i} className=\"group relative rounded-[2.5rem] bg-white p-12 transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] border border-gray-100/50\">
                  <h3 className=\"text-2xl font-bold tracking-tight text-[#1D1D1F]\">{item.title}</h3>
                  <p className=\"mt-6 text-[1.1rem] leading-[1.618] text-gray-500/80\">{item.body}</p>
                  <div className=\"mt-[2.618rem] text-sm font-bold uppercase tracking-[0.15em] text-blue-600 transition-all group-hover:translate-x-2\">
                    {item.stat} →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 pb-[6.18rem] pt-[3.618rem]">
          <div className="mx-auto max-w-5xl rounded-[3rem] bg-black p-[6.18rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/20 blur-[100px]"></div>
            <h2 className="relative z-10 text-[2.5rem] font-bold tracking-tight md:text-[4.5rem] leading-none">
              The Future is Action.<br/>
              Are You Ready?
            </h2>
            <p className="relative z-10 mx-auto mt-8 max-w-xl text-lg text-gray-400">
              Join the founders building high-velocity organizations on the first autonomous People OS.
            </p>
            <button className="relative z-10 mt-12 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-all hover:bg-gray-100 hover:scale-105 active:scale-95">
              Experience KumoHR Now
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100/50 bg-white py-20 text-center">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold">KumoHR</div>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href=\"#\">Security</a>
            <a href=\"#\">Privacy</a>
            <a href=\"#\">Terms</a>
          </div>
          <div className="text-xs text-gray-400">© 2026 KumoHR. All Systems Operational.</div>
        </div>
      </footer>
    </div>
  );
};

export default GoldenRatioHero;
