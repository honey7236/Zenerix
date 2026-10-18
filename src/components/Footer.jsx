import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090B0E] border-t border-white/10 pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand Logo Only */}
          <div className="space-y-3">
            <a href="#" className="inline-block group">
              <img
                src="/assets/zenerix-text-logo.png"
                alt="Zenerix Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-[#C7CCD6] leading-relaxed max-w-xs">
              Next-generation video post-production studio crafting viral short-form loops and high-retention edits.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/zenerix_official/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1A1F2B] border border-white/10 flex items-center justify-center text-[#C7CCD6] hover:text-[#00A3FF] hover:border-[#00A3FF]/40 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://x.com/zenerix_media"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1A1F2B] border border-white/10 flex items-center justify-center text-[#C7CCD6] hover:text-[#00A3FF] hover:border-[#00A3FF]/40 transition-all"
                aria-label="Twitter X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61589973603211"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1A1F2B] border border-white/10 flex items-center justify-center text-[#C7CCD6] hover:text-[#00A3FF] hover:border-[#00A3FF]/40 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#C7CCD6]">
              <li><a href="#services" className="hover:text-[#00A3FF] transition-colors">Viral Short-Form Loops</a></li>
              <li><a href="#services" className="hover:text-[#00A3FF] transition-colors">YouTube Retention Cuts</a></li>
              <li><a href="#services" className="hover:text-[#00A3FF] transition-colors">Direct-Response Video Ads</a></li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase tracking-wider mb-3">
              Studio
            </h4>
            <ul className="space-y-2 text-xs text-[#C7CCD6]">
              <li><a href="#showcase" className="hover:text-[#00A3FF] transition-colors">Reels Showcase</a></li>
              <li><a href="#reviews" className="hover:text-[#00A3FF] transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#00A3FF] transition-colors">Questions & FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase tracking-wider mb-3">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#C7CCD6]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00A3FF]" />
                <a href="mailto:zenerixmedia@gmail.com" className="hover:text-[#00A3FF] transition-colors">
                  zenerixmedia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#C7CCD6]">
          <p>© 2026 Zenerix Studio. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#00A3FF] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
