"use client";

import { useState, useEffect } from "react";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500", "600"] });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500"] });

// Email Obfuscation Component
const ObfuscatedEmail = ({ className = "", label = "" }) => {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    const user = "kimberly";
    const domain = "aldermanlawfirm.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) return <span className={className}>Loading...</span>;

  return (
    <a href={`mailto:${email}`} className={className}>
      {label || email}
    </a>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-paper text-oxford ${sans.className}`}>
      
      {/* HEADER */}
      <header className="sticky top-0 bg-paper/95 backdrop-blur-sm z-50 pt-6 pb-2">
        <div className="max-w-2xl mx-auto px-6 flex justify-between items-end">
          <h1 className={`${serif.className} text-lg font-medium tracking-tight text-oxford`}>
            Kimberly Rufe
          </h1>
          <a 
            href="https://aldermanlawfirm.com" 
            target="_blank"
            className="text-[10px] uppercase tracking-widest text-bronze hover:text-oxford transition-colors"
          >
            Alderman Law Firm ↗
          </a>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6">
        
        {/* 1. HERO */}
        <section className="pt-24 pb-16">
          <h1 className={`${serif.className} text-5xl md:text-6xl font-medium mb-6 leading-none text-oxford`}>
            Kimberly Rufe
          </h1>
          <p className="text-xl text-bronze mb-4 font-medium">
            Appellate Counsel & Briefing Support
          </p>
          <p className="text-sm uppercase tracking-widest text-oxford/60 mb-10">
            This page is intended for attorneys with a ruling, adverse order, or appeal-deadline concern.
          </p>
          
          <p className="text-lg leading-loose text-oxford mb-12">
            I typically serve as counsel on appeal, handling issue evaluation, briefing, and appellate procedure. For trial matters, I provide drafting and research support only. Referring counsel remains counsel of record unless appellate representation is requested. Most matters arise after a ruling or deadline concern. Email is preferred, and attaching the order or relevant filing allows prompt review.
          </p>
          
          <div className="mb-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-oxford text-paper px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-bronze transition-colors text-center"
            >
              For Attorneys — Email
            </button>
          </div>

          <div className="border-l-2 border-bronze pl-6 py-2">
            <p className="text-xs uppercase tracking-widest text-bronze mb-2 font-bold">Not a lawyer?</p>
            <p className="text-base text-oxford mb-4">
              If you are seeking legal representation for a personal matter, use the Alderman Law Firm site. This page is intended for attorneys.
            </p>
            <a 
              href="https://aldermanlawfirm.com" 
              target="_blank"
              className="text-sm font-bold border-b border-bronze pb-0.5 hover:text-bronze transition-colors"
            >
              Go to Alderman Law Firm ↗
            </a>
          </div>
        </section>

        {/* 2. WHEN TO INVOLVE APPELLATE COUNSEL */}
        <section className="py-16">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            When to Involve Appellate Counsel
          </h2>
          <p className="text-lg text-oxford mb-8">
            Attorneys typically contact me when a case raises appellate or record-related concerns, including:
          </p>
          
          <ul className="space-y-3 mb-12 text-oxford text-lg">
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">01</span>
              <span>Appeals in Colorado and federal appellate courts</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">02</span>
              <span>Post-trial and post-judgment motions affecting appeal rights</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">03</span>
              <span>Record analysis and appellate strategy</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">04</span>
              <span>Appellate briefing and motion practice</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">05</span>
              <span>Trial-stage involvement limited to preservation, drafting, and appellate strategy</span>
            </li>
          </ul>
        </section>

        {/* 3. WORKING WITH REFERRING COUNSEL */}
        <section className="py-16">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            Working With Referring Counsel
          </h2>
          
          <p className="text-lg text-oxford mb-8 leading-loose">
            Referring counsel remains lead counsel in the matter. I assist with appellate and record-related issues, including issue evaluation, preservation, and briefing. My role may be limited to consultation or extend through full briefing and, when requested, an appearance on appeal. I do not contact or bill the client directly unless requested by referring counsel.
          </p>
          
          <p className="text-lg text-oxford leading-loose">
            I also work with attorneys in other jurisdictions, including Wisconsin. Local counsel remains counsel of record while I provide research, analysis, and drafting support.
          </p>
        </section>

        {/* 4. SELECTED WRITING */}
        <section className="py-16">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            Selected Writing on Appellate Procedure
          </h2>
          <ul className="space-y-4 text-oxford">
            <li>
              <a href="https://aldermanlawfirm.com/what-the-record-on-appeal-actually-is-and-why-appeals-are-decided-there/" target="_blank" className="hover:text-bronze transition-colors border-b border-oxford/10 pb-1 block">
                What the appellate court reviews — understanding the record on appeal ↗
              </a>
            </li>
            <li>
              <a href="https://aldermanlawfirm.com/can-you-add-evidence-after-trial-supplementing-the-record-on-appeal-in-colorado/" target="_blank" className="hover:text-bronze transition-colors border-b border-oxford/10 pb-1 block">
                What can be added to the appellate record — and what cannot ↗
              </a>
            </li>
            <li>
              <a href="https://aldermanlawfirm.com/issue-preservation-in-colorado-appeals-was-my-issue-preserved-for-appeal/" target="_blank" className="hover:text-bronze transition-colors border-b border-oxford/10 pb-1 block">
                When an issue is preserved for appeal — and when it is waived ↗
              </a>
            </li>
            <li>
              <a href="https://aldermanlawfirm.com/the-cumulative-error-doctrine-in-colorado-appeals/" target="_blank" className="hover:text-bronze transition-colors border-b border-oxford/10 pb-1 block">
                How appellate courts evaluate multiple trial errors (cumulative error) ↗
              </a>
            </li>
            <li>
              <a href="https://aldermanlawfirm.com/what-is-the-criteria-for-a-cert-petition-in-colorado/" target="_blank" className="hover:text-bronze transition-colors border-b border-oxford/10 pb-1 block">
                When a Colorado Supreme Court cert petition may be viable ↗
              </a>
            </li>
          </ul>
        </section>

        {/* 5. ADMISSIONS */}
        <section className="py-16">
          <h2 className={`${serif.className} text-3xl font-medium mb-6 text-oxford`}>
            Admissions
          </h2>
          <ul className={`text-oxford text-base leading-snug space-y-1 ${serif.className}`}>
            <li>Colorado</li>
            <li>Wisconsin</li>
            <li>United States District Court for the District of Colorado</li>
            <li>United States Court of Appeals for the Tenth Circuit</li>
            <li>United States Court of Appeals for the Seventh Circuit</li>
            <li>United States Court of Appeals for the Sixth Circuit</li>
            <li>United States Court of Appeals for the Fourth Circuit</li>
            <li>Supreme Court of the United States</li>
          </ul>
        </section>

        {/* 6. BIO */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
             {/* Image */}
            <div className="w-32 flex-shrink-0">
               <img 
                  src="/kimberly-rufe-portrait.jpg" 
                  alt="Kimberly Rufe" 
                  className="w-full h-auto object-cover grayscale opacity-90"
                  style={{ aspectRatio: '3/4', objectPosition: 'top' }} 
                />
            </div>

            <div>
              <h3 className={`${serif.className} text-xl font-medium mb-4 text-oxford`}>
                Kimberly Alderman Rufe
              </h3>
              <p className="text-lg leading-loose text-oxford">
                Kimberly Alderman Rufe is an attorney who represents parties on appeal and handles post-trial proceedings. She previously clerked in the judiciary and taught in the clinical program at the University of Wisconsin Law School. She works with referring attorneys on a collaborative basis, providing analysis and drafting support while trial counsel remains lead counsel.
              </p>
            </div>
          </div>
        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="py-16 pb-32">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            Contact
          </h2>
          
          <div className="space-y-4">
            <p className="text-base text-oxford mb-2">Email is preferred. Attaching the order or brief is helpful.</p>
            <ObfuscatedEmail className="text-xl text-oxford hover:text-bronze transition-colors border-b border-oxford/20 pb-1" />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-paper border-t border-oxford/10">
        <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-oxford/60">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <p className={`${serif.className} text-lg text-oxford mb-1`}>Kimberly Rufe</p>
              <p className="text-xs uppercase tracking-widest">Attorney at Law</p>
            </div>
          </div>
        </div>
      </footer>

      {/* EMAIL-STYLE INTAKE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-oxford/20 backdrop-blur-[2px] transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg shadow-2xl border border-oxford/10 rounded-t-lg sm:rounded-lg overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Fake Window Header */}
            <div className="bg-paper border-b border-oxford/10 px-4 py-3 flex justify-between items-center flex-shrink-0">
              <span className="text-xs font-bold uppercase tracking-widest text-oxford/60">New Message</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-oxford/40 hover:text-bronze transition-colors text-lg leading-none px-2"
              >
                ✕
              </button>
            </div>

            {/* Email Form Body */}
            <div className="p-6 overflow-y-auto flex-grow bg-white">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                
                {/* To Field (Visual Only) */}
                <div className="flex items-baseline border-b border-oxford/10 pb-2">
                  <span className="text-sm text-oxford/40 w-16 flex-shrink-0">To:</span>
                  <span className="text-sm text-oxford font-medium">Kimberly Rufe</span>
                </div>

                {/* From Field */}
                <div className="flex items-baseline border-b border-oxford/10 pb-2">
                  <label className="text-sm text-oxford/60 w-16 flex-shrink-0">From:</label>
                  <input type="email" className="flex-grow bg-transparent focus:outline-none text-oxford text-sm placeholder:text-oxford/20" placeholder="your.email@firm.com" autoFocus />
                </div>

                {/* Subject Field */}
                <div className="flex items-baseline border-b border-oxford/10 pb-2">
                  <label className="text-sm text-oxford/60 w-16 flex-shrink-0">Subject:</label>
                  <input type="text" className="flex-grow bg-transparent focus:outline-none text-oxford text-sm placeholder:text-oxford/20" placeholder="Case Caption / Order / Referral" />
                </div>

                {/* Message Body */}
                <div className="pt-2">
                  <textarea 
                    rows={8} 
                    className="w-full bg-transparent focus:outline-none text-oxford text-base leading-relaxed placeholder:text-oxford/20 resize-none" 
                    placeholder="Brief description of procedural posture, deadlines, or assistance needed..."
                  ></textarea>
                </div>

                {/* Attachment Fake UI */}
                <div className="pt-2 border-t border-oxford/5 flex items-center gap-2">
                   <button type="button" className="text-oxford/40 hover:text-bronze flex items-center gap-2 text-xs font-medium py-2 px-3 rounded hover:bg-paper transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                      </svg>
                      Attach Order/Brief
                   </button>
                   <span className="text-[10px] text-oxford/30 italic ml-auto">(.pdf, .docx)</span>
                </div>

              </form>
            </div>

            {/* Footer Actions */}
            <div className="bg-paper px-6 py-4 border-t border-oxford/10 flex justify-between items-center flex-shrink-0">
               <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-bold text-oxford/40 hover:text-oxford uppercase tracking-widest transition-colors"
                >
                  Discard
                </button>
               <button className="bg-oxford text-paper px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-bronze transition-colors rounded shadow-sm">
                  Send Message
               </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
