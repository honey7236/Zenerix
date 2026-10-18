import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle, Sparkles, Link2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledService, isModal = false, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandLink: '',
    service: prefilledService || 'Viral Short-Form Loops',
    footageLink: '',
    budget: '$1,000 - $2,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const serviceOptions = [
    'Viral Short-Form Loops',
    'Documentary YouTube Edits',
    'Next-Gen AI Video Ads',
    'Direct-Response Paid Ads',
    'Studio & Podcast Multi-Cam',
    'Weekly Content Repurposing',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    'Monthly Retainer',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00A3FF', '#0066FF', '#FFFFFF'],
        });
      } catch (err) {
        console.log('Confetti triggered');
      }
    }, 700);
  };

  const formElement = (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00A3FF] mb-2">
          Start An Edit
        </p>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready to Elevate <span className="text-gradient">Your Content?</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#C7CCD6]/70">
          Share your footage link or project vision. We respond with a tailored turnaround timeline within 12 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Studio Info Left Column */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00A3FF] block mb-1">
              Direct Ingestion
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
              Zenerix Studio
            </h3>
            <p className="text-xs text-[#C7CCD6]/70 leading-relaxed">
              Partnering with top creators, hyper-growth startups, and media brands worldwide.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/[0.06] text-xs">
            <div className="flex items-center gap-3 text-[#C7CCD6]">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00A3FF] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-gray-500 block">Email</span>
                <a href="mailto:zenerixmedia@gmail.com" className="text-white hover:text-[#00A3FF] transition-colors">
                  zenerixmedia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#C7CCD6]">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00A3FF] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-gray-500 block">Base</span>
                <span className="text-white">Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20">
            <span className="text-[10px] font-bold text-[#00A3FF] uppercase tracking-wider block mb-1">
              ⚡ Response Guarantee
            </span>
            <p className="text-[11px] text-[#C7CCD6]/80 leading-relaxed">
              Every project brief is reviewed directly by our lead creative director within 12 hours.
            </p>
          </div>
        </div>

        {/* UI/UX Designed Aesthetic Form Column */}
        <div className="lg:col-span-8 p-6 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#00A3FF]/20 border border-[#00A3FF] flex items-center justify-center text-[#00A3FF] mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Brief Received Successfully
              </h3>
              <p className="text-xs text-[#C7CCD6]/80 max-w-sm mx-auto">
                Thank you! Our post-production team will review your project and get back to <span className="text-[#00A3FF]">{formData.email}</span> within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-semibold text-[#00A3FF] hover:underline cursor-pointer"
              >
                Send another message or brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection Pills */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Select Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, service: opt })}
                      className={`py-2 px-3 rounded-xl text-[11px] font-semibold text-left transition-all border cursor-pointer ${
                        formData.service === opt
                          ? 'bg-[#00A3FF] border-[#00A3FF] text-black shadow-[0_0_15px_rgba(0,163,255,0.3)]'
                          : 'bg-white/[0.03] border-white/[0.08] text-[#C7CCD6] hover:bg-white/[0.06]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Channel / Brand Link & Footage Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Channel or Brand Link
                  </label>
                  <input
                    type="text"
                    placeholder="youtube.com/@channel or instagram"
                    value={formData.brandLink}
                    onChange={(e) => setFormData({ ...formData, brandLink: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Raw Footage Link (Cloud / Drive)
                  </label>
                  <div className="relative">
                    <Link2 className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Google Drive, Dropbox, etc."
                      value={formData.footageLink}
                      onChange={(e) => setFormData({ ...formData, footageLink: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Target Budget Selection Pills */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Target Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 rounded-xl text-[11px] font-semibold text-center transition-all border cursor-pointer ${
                        formData.budget === b
                          ? 'bg-[#00A3FF] border-[#00A3FF] text-black shadow-[0_0_15px_rgba(0,163,255,0.3)]'
                          : 'bg-white/[0.03] border-white/[0.08] text-[#C7CCD6] hover:bg-white/[0.06]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                  Project Notes & Style References
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Describe your editing requirements, reference creators or accounts, turnaround deadlines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full neon-btn py-3.5 rounded-xl text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Project Brief...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Brief</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D0F14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          {formElement}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0D0F14] overflow-hidden">
      {formElement}
    </section>
  );
}
