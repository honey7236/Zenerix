import React, { useState } from 'react';
import { ExternalLink, Eye, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function ShowcaseSection() {
  const [isMuted, setIsMuted] = useState(true);

  // 8 High-Impact Showcase Reels with Instagram links and auto-playing video
  const reels = [
    {
      id: 1,
      title: 'Hook Formula for 10M+ Organic Views',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '4.8M',
      retention: '92%',
      tag: 'Viral Short-Form',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 2,
      title: 'Direct-Response SaaS Ad Creative',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '2.4M',
      retention: '85%',
      tag: 'Paid Video Ad',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 3,
      title: 'Documentary Pacing & Storytelling Arc',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '1.9M',
      retention: '89%',
      tag: 'YouTube Long-Form',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 4,
      title: 'Dynamic Kinetic Typography & Retention Cuts',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '3.6M',
      retention: '94%',
      tag: 'Viral Subtitles',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 5,
      title: 'Generative AI Visual Campaign & Avatar Cut',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '2.1M',
      retention: '88%',
      tag: 'AI Video Ad',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 6,
      title: 'Multi-Cam Studio Podcast Highlight Cut',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '1.2M',
      retention: '81%',
      tag: 'Podcast Repurpose',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 7,
      title: 'E-Commerce Product Launch Hook & Angles',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '3.1M',
      retention: '90%',
      tag: 'Direct-Response UGC',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
    {
      id: 8,
      title: 'Seamless Infinite Algorithm Loop Structure',
      client: '@zenerix_official',
      instagramUrl: 'https://www.instagram.com/zenerix_official/',
      views: '5.2M',
      retention: '96%',
      tag: 'Looping Mastery',
      videoSrc: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="showcase" className="relative py-24 bg-[#0D0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00A3FF] mb-2">
              Portfolio
            </p>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient">Reels & Edits</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#C7CCD6]/70">
              Plays automatically. Tap any card to open the post on Instagram.
            </p>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-[#C7CCD6] hover:text-[#00A3FF] border border-white/10 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#00A3FF]" />}
            <span>{isMuted ? 'Muted' : 'Sound Playing'}</span>
          </button>
        </div>

        {/* 8 Reels Grid: Increased card size, large & attractive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => handleCardClick(reel.instagramUrl)}
              className="group relative rounded-3xl overflow-hidden bg-black/40 border border-white/[0.08] hover:border-[#00A3FF]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(0,163,255,0.35)] cursor-pointer flex flex-col min-h-[480px] sm:min-h-[520px]"
            >
              {/* Autoplaying Loop Video */}
              <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
                <video
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 filter brightness-95 contrast-110"
                >
                  <source src={reel.videoSrc} type="video/mp4" />
                </video>
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-black/20 to-black/60 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#00A3FF]/0 group-hover:bg-[#00A3FF]/10 transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Top Tag & Views */}
              <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white/90 border border-white/10 px-2.5 py-1 rounded-full">
                  {reel.tag}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A3FF] bg-[#0D0F14]/80 backdrop-blur-md border border-[#00A3FF]/30 px-2.5 py-0.5 rounded-full">
                  <Eye className="w-3.5 h-3.5" />
                  {reel.views}
                </span>
              </div>

              {/* Hover Center Indicator */}
              <div className="relative z-10 my-auto flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-[#00A3FF] text-black flex items-center justify-center font-bold shadow-[0_0_25px_#00A3FF]">
                  <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="relative z-10 p-5 mt-auto pointer-events-none">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-medium text-[#00A3FF]">{reel.client}</span>
                  <span className="text-gray-400 font-mono">{reel.retention} Retention</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-[#00A3FF] transition-colors leading-snug mb-3">
                  {reel.title}
                </h3>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/80 bg-white/10 group-hover:bg-[#00A3FF] group-hover:text-black backdrop-blur-md px-3 py-1 rounded-lg transition-all">
                  <span>Open on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Instagram Profile */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/zenerix_official/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-[#00A3FF] text-[#C7CCD6] hover:text-black text-xs font-bold uppercase tracking-wider transition-all border border-white/10 hover:border-transparent cursor-pointer"
          >
            <span>View All Edits on @zenerix_official</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
