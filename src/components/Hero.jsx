import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenContact, onOpenShowreel }) {
  const [counts, setCounts] = useState({ views: 0, retention: 0, videos: 0, hours: 0 });

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        views: Math.floor(ease * 150),
        retention: Math.floor(ease * 78),
        videos: Math.floor(ease * 4200),
        hours: Math.floor(ease * 24),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[88vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Video with Deep Minimal Ambient Layers */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.16] filter contrast-125"
        >
          <source
            src="https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F14] via-[#0D0F14]/75 to-[#0D0F14]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.09)_0,transparent_65%)]"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
      </div>

      {/* Subtle Central Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Hero Typography & Actions */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Minimal Category Lead */}
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#00A3FF] mb-6">
          Post-Production & Retention Studio
        </p>

        {/* Striking Aesthetic Headline */}
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-6">
          Crafting Edits That <br />
          <span className="text-gradient">Command Attention</span>
        </h1>

        {/* Crisp Minimal Subtitle */}
        <p className="max-w-xl text-sm sm:text-base text-[#C7CCD6]/80 font-normal leading-relaxed mb-10">
          Transforming raw recordings into addictive viral loops, documentary-grade YouTube storytelling, and high-converting video ads.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <button
            onClick={onOpenContact}
            className="neon-btn font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-white px-7 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,163,255,0.35)] hover:shadow-[0_0_35px_rgba(0,163,255,0.55)] transition-all"
          >
            <span>Book An Edit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenShowreel}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00A3FF]/40 backdrop-blur-xl flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-[#00A3FF] text-[#00A3FF]" />
            <span>Watch Showreel</span>
          </button>
        </div>

        {/* Minimalist Metrics Strip (No button-like borders, just refined typography) */}
        <div className="w-full max-w-2xl pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {counts.views}<span className="text-[#00A3FF]">M+</span>
            </div>
            <div className="text-[11px] text-[#C7CCD6]/60 uppercase tracking-wider mt-0.5">
              Views Generated
            </div>
          </div>

          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {counts.retention}<span className="text-[#00A3FF]">%</span>
            </div>
            <div className="text-[11px] text-[#C7CCD6]/60 uppercase tracking-wider mt-0.5">
              Avg. Retention
            </div>
          </div>

          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {counts.videos}<span className="text-[#00A3FF]">+</span>
            </div>
            <div className="text-[11px] text-[#C7CCD6]/60 uppercase tracking-wider mt-0.5">
              Videos Edited
            </div>
          </div>

          <div>
            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {counts.hours}<span className="text-[#00A3FF]">h</span>
            </div>
            <div className="text-[11px] text-[#C7CCD6]/60 uppercase tracking-wider mt-0.5">
              Fast Turnaround
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
