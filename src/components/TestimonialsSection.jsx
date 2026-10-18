import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CMO, NovaTech AI',
      metric: '+320% Viewership Surge',
      content:
        'Zenerix completely revolutionized our digital content pipeline. Their retention cuts and kinetic typography took our short-form content from 2,000 views to millions across TikTok and Reels. They do not just edit—they understand viewer psychology.',
      avatarInitials: 'SJ',
    },
    {
      name: 'Marcus Chen',
      role: 'Founder, Elevate Media (1.8M Subs)',
      metric: '74% Average Watch Retention',
      content:
        'Finding editors who understand documentary-style storytelling like Vox or Magnates Media is nearly impossible. Zenerix nailed our pacing from the very first delivery. The 24-48h turnaround is pure magic.',
      avatarInitials: 'MC',
    },
    {
      name: 'Elena Rostova',
      role: 'Creative Director, Vesper Luxe Studio',
      metric: '4.2x ROAS on Video Ads',
      content:
        'The level of premium craftsmanship they deliver is unmatched. From cinematic film color grading to bespoke sound design and 3D motion, everything feels cinematic and luxurious. Our ad conversion rates skyrocketed.',
      avatarInitials: 'ER',
    },
  ];

  return (
    <section id="reviews" className="relative py-24 bg-[#0D0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1F2B] border border-[#00A3FF]/30 text-xs font-semibold uppercase tracking-widest text-[#00A3FF] mb-4">
            <Star className="w-3.5 h-3.5 text-[#00A3FF] fill-current" />
            Client Transformations
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            PROVEN RESULTS FOR <br />
            <span className="text-gradient">CREATORS & GLOBAL BRANDS</span>
          </h2>
          <p className="mt-4 text-base text-[#C7CCD6]">
            Hear directly from the creators, media companies, and brands scaling with Zenerix post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#00A3FF]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,163,255,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#00A3FF] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00A3FF] bg-[#00A3FF]/10 px-2.5 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3" /> {t.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#00A3FF]/30 mb-3" />
                <p className="text-sm text-[#C7CCD6] leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00A3FF] text-white flex items-center justify-center font-bold text-xs">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#00A3FF]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
