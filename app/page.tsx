import React from 'react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-blue-100">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100 bg-white/80 px-8 py-6 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-tight text-blue-600">KumoHR</div>
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#solutions" className="hover:text-black transition-colors">Solutions</a>
          <a href="#platform" className="hover:text-black transition-colors">Platform</a>
          <a href="#insights" className="hover:text-black transition-colors">Insights</a>
        </div>
        <button className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
          Experience Exceptional HR
        </button>
      </nav>

      <main className="pt-32">
        <section className="px-8 pb-24 pt-16 text-center">
          <h1 className="mx-auto max-w-4xl text-6xl font-extrabold tracking-tight md:text-8xl">
            Exceptional People Operations. <span className="text-blue-600">Delivered Autonomously.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl">
            Move beyond records. KumoHR is the AI-Native OS that empowers founders and HR leaders to achieve extraordinary alignment in 150+ countries.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95">
              Start Your Evolution
            </button>
            <button className="group flex items-center gap-2 text-lg font-semibold text-black transition-colors hover:text-blue-600">
              How it Works
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </section>

        <section id="solutions" className="bg-gray-50 px-8 py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Stop Alerting. Start Acting.</h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-500">
                  Legacy platforms (Rippling, Deel, BambooHR) are built to record what has already happened. KumoHR is built to act. We provide the System of Action that anticipates your next move—achieving elite talent density, invisible payroll, and day-one readiness with autonomous precision.
                </p>
              </div>
              <div className="aspect-square rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 flex items-center justify-center">
                <div className="w-full h-1 bg-gray-100 relative rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="px-8 py-32">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-16">The Excellence Standard</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: 'Surgical Ranking', body: "We don't just screen; we rank for excellence. Our ML-driven engine ensures your team is built with surgical precision.", outcome: '3x Faster Hiring' },
                { title: 'Invisible Payroll', body: 'Autonomous execution against real-time local labor laws in 150+ markets with zero manual oversight.', outcome: '99.9% Accuracy' },
                { title: 'Day-One Impact', body: 'From the first contract to equipment access, the entire journey is handled autonomously. No friction.', outcome: 'Immediate Alignment' }
              ].map((pillar, i) => (
                <div key={i} className="group rounded-3xl border border-gray-100 bg-white p-10 text-left transition-all hover:border-blue-100 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">{pillar.body}</p>
                  <div className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-600">{pillar.outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 px-8 py-16 text-center text-gray-400 text-sm">
        © 2026 KumoHR. Humanizing HR through Intelligent Systems.
      </footer>
    </div>
  );
}
