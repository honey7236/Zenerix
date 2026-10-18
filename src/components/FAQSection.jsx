import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is your typical turnaround time?',
      a: 'Short-form videos and video ads are delivered in 24 to 48 hours. Long-form YouTube edits typically take 48 to 72 hours. Same-day rush delivery is available on request.',
    },
    {
      q: 'How do we send our raw footage?',
      a: 'You can share a Google Drive, Dropbox, or cloud storage link directly during project booking or in our chat.',
    },
    {
      q: 'What is your revision policy?',
      a: 'We offer unlimited revisions until you are 100% satisfied. You can leave timestamped comments directly on the cut for quick turnarounds.',
    },
    {
      q: 'Are music and sound effects copyright-cleared?',
      a: 'Yes. All background tracks and sound effects are fully licensed for commercial monetization across YouTube, Meta, TikTok, and web.',
    },
  ];

  return (
    <section id="faq" className="relative py-16 bg-[#0D0F14] overflow-hidden border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F2B] border border-[#00A3FF]/30 text-[10px] font-semibold uppercase tracking-widest text-[#00A3FF] mb-3">
            <HelpCircle className="w-3 h-3" />
            Quick FAQ
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </div>

        {/* Compact Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl glass-panel border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                >
                  <span className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#1A1F2B] flex items-center justify-center text-[#00A3FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#00A3FF] text-black' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#C7CCD6] leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
