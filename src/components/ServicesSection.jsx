import React from 'react';
import { Smartphone, Tv, Sparkles, ArrowRight, Bot, Megaphone } from 'lucide-react';

export default function ServicesSection({ onSelectServiceForBooking }) {
  const services = [
    {
      id: 'short-form',
      title: 'Viral Short-Form Loops',
      badge: 'Reels • Shorts • TikTok',
      icon: Smartphone,
      description:
        'Engineered for maximum retention. Hook-first pacing, kinetic typography, precision jump-cuts, and sound design tailored for algorithmic virality.',
      tag: '24-48h Delivery',
    },
    {
      id: 'youtube-longform',
      title: 'Documentary YouTube Edits',
      badge: 'Long-Form • Podcasts',
      icon: Tv,
      description:
        'Deep narrative pacing that protects audience watch curves. Pattern interrupts, seamless b-roll integration, and clean motion infographics.',
      tag: '48-72h Delivery',
    },
    {
      id: 'ai-ads',
      title: 'Next-Gen AI Video Ads',
      badge: 'Generative AI • Avatars',
      icon: Bot,
      description:
        'High-converting synthetic video creatives, AI b-roll generation, realistic avatars, and rapid split-test variations to scale advertising ROI.',
      tag: 'High ROAS',
    },
    {
      id: 'direct-response',
      title: 'Direct-Response Paid Ads',
      badge: 'Meta • TikTok • Google',
      icon: Megaphone,
      description:
        'Commercial creatives structured around consumer psychology. Scroll-stopping hooks, pain-point agitation, and clear conversion CTAs.',
      tag: 'Split-Tested',
    },
    {
      id: 'podcast-repurpose',
      title: 'Studio & Multi-Cam Editing',
      badge: 'Multi-Angle • Clean Audio',
      icon: Tv,
      description:
        'Multi-camera switching, active speaker framing, sound cleanup, and extraction of bite-sized vertical highlight reels from long sessions.',
      tag: 'Full Episodes',
    },
    {
      id: 'content-scale',
      title: 'Weekly Content Repurposing',
      badge: 'Turn 1 Video into 10',
      icon: Sparkles,
      description:
        'Transforming podcasts, webinars, and long-form video libraries into a continuous stream of organic vertical short-form assets.',
      tag: 'Weekly Cadence',
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0D0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00A3FF] mb-3">
            Services
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-gradient">Post-Production</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#C7CCD6]/70">
            Focused exclusively on formats that maximize audience retention and commercial growth.
          </p>
        </div>

        {/* Minimalist Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectServiceForBooking(item.title)}
                className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] hover:border-[#00A3FF]/40 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,163,255,0.2)] cursor-pointer"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center text-[#00A3FF] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#00A3FF] bg-[#00A3FF]/10 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-[11px] text-gray-400 font-medium block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white group-hover:text-[#00A3FF] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#C7CCD6]/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#00A3FF] transition-colors">
                  <span>Order Edit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
