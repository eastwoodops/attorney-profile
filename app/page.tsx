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
            Appellate Counsel & Litigation Consultant
          </p>
          <p className="text-sm uppercase tracking-widest text-oxford/60 mb-10">
            This page is for attorneys seeking assistance with appellate or record-related issues.
          </p>
          
          <p className="text-lg leading-loose text-oxford mb-12">
            This practice focuses on appellate and record-driven litigation issues, including issue selection, briefing, and procedural strategy. Trial counsel remains counsel of record; involvement can be limited to discrete projects or extend through full briefing. Most matters originate from trial counsel seeking briefing or procedural guidance. The fastest way to reach me is by email with the order or issue attached.
          </p>
          
          <div className="mb-12">
            <ObfuscatedEmail 
              label="For Attorneys — Email"
              className="inline-block bg-oxford text-paper px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-bronze transition-colors text-center"
            />
          </div>

          <div className="border-l-2 border-bronze pl-6 py-2">
            <p className="text-xs uppercase tracking-widest text-bronze mb-2 font-bold">Not a lawyer?</p>
            <p className="text-base text-oxford mb-4">
              If you are seeking representation for a personal legal matter, please begin at Alderman Law Firm. That site handles non-attorney client intake and direct representation.
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
              <span>Issue selection and preservation analysis</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">03</span>
              <span>Post-trial and post-judgment motions affecting appeal rights</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">04</span>
              <span>Record analysis and appellate strategy</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">05</span>
              <span>Appellate briefing and motion practice</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">06</span>
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
            Trial counsel remains lead counsel in the matter. I assist with appellate and record-related issues, including issue evaluation, preservation, and briefing. Involvement may be limited to consultation or extend through full briefing and, when requested, an appearance on appeal.
          </p>
          
          <p className="text-lg text-oxford leading-loose">
            Attorneys in other jurisdictions, including Wisconsin, may retain me in a consulting or drafting capacity. Local counsel remains counsel of record while I handle research, analysis, and written advocacy.
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

        {/* 5. ADMISSIONS (Compact) */}
        <section className="py-16">
          <h2 className={`${serif.className} text-3xl font-medium mb-6 text-oxford`}>
            Admissions
          </h2>
          <ul className={`text-oxford text-base leading-snug space-y-1 ${serif.className}`}>
            <li>United States Court of Appeals for the Tenth Circuit</li>
            <li>United States Court of Appeals for the Seventh Circuit</li>
            <li>United States Court of Appeals for the Sixth Circuit</li>
            <li>United States District Court for the District of Colorado</li>
            <li>Colorado</li>
            <li>Wisconsin</li>
            <li>Supreme Court of the United States</li>
          </ul>
        </section>

        {/* 6. BIO */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
             {/* Image - Small, Cropped */}
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
                Kimberly Alderman Rufe is an attorney whose practice focuses on appeals and record-based litigation. She previously clerked in the judiciary and taught in the clinical program at the University of Wisconsin Law School. She works with referring attorneys on a collaborative basis, providing analysis and drafting support while trial counsel remains lead counsel.
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
            <ObfuscatedEmail className="text-xl text-oxford hover:text-bronze transition-colors border-b border-oxford/20 pb-1" />
            <p className="text-sm text-oxford/60 italic">
              Conflict checks are handled prior to representation. No intake questionnaire required.
            </p>
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
            <div className="text-right">
               <p>Colorado Bar Registration No. 48050</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed max-w-md">
            This site does not constitute legal advice or establish an attorney-client relationship. Representation is not formed until a written engagement agreement is signed.
          </p>
        </div>
      </footer>

    </div>
  );
}
