import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenShowreel }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0F14]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Only (No duplicate text) */}
          <a href="#" className="flex items-center group shrink-0">
            <img
              src="/assets/zenerix-text-logo.png"
              alt="Zenerix Video Editing Studio"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links - Centered & Clean */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-wide text-[#C7CCD6] hover:text-[#00A3FF] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00A3FF] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7CCD6] hover:text-white px-3.5 py-2 rounded-xl border border-white/10 hover:border-[#00A3FF]/40 transition-all duration-300 hover:bg-[#1A1F2B]/60 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-[#00A3FF]" />
              Showreel
            </button>
            <button
              onClick={onOpenContact}
              className="neon-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-5 py-2.5 rounded-xl font-['Space_Grotesk'] cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book An Edit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenContact}
              className="neon-btn text-[11px] font-bold uppercase tracking-wider text-white px-3 py-1.5 rounded-lg sm:hidden cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1A1F2B]/80 text-[#C7CCD6] hover:text-white border border-white/10 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-[#0D0F14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#C7CCD6] hover:text-[#00A3FF] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShowreel();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#00A3FF]/30 text-[#00A3FF] hover:bg-[#00A3FF]/10 text-xs font-semibold cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Showreel
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full neon-btn flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Book An Edit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
