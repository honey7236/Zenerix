import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose, onBookNow, activeProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultVideo = {
    title: 'Zenerix Master Showreel',
    videoUrl: 'https://res.cloudinary.com/dcdcnubib/video/upload/v1780000336/website_background_vmcihd.mp4',
    format: '4K Master Cut • 60fps',
  };

  const project = activeProject || defaultVideo;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-2 z-20">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3FF] block">
            {project.format}
          </span>
          <h3 className="font-['Space_Grotesk'] text-base sm:text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1.5 text-xs font-semibold"
          aria-label="Close fullscreen player"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </div>

      {/* Immersive Video Screen Container */}
      <div className="relative w-full max-w-7xl mx-auto flex-grow my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
        <video
          autoPlay
          controls
          playsInline
          className="w-full h-full max-h-[78vh] object-contain rounded-2xl"
          src={project.videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-2 z-20">
        <div className="flex items-center gap-2 text-xs text-[#C7CCD6]/70">
          <CheckCircle2 className="w-4 h-4 text-[#00A3FF]" />
          <span>Mastered in 4K UHD with studio color science & spatial sound design</span>
        </div>

        <button
          onClick={() => {
            onClose();
            onBookNow(project.title);
          }}
          className="neon-btn font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white px-6 py-2.5 rounded-xl cursor-pointer flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Video In This Style</span>
        </button>
      </div>
    </div>
  );
}
