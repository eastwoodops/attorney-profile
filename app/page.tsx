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
        
        {/* 1. HERO FUNCTION STATEMENT */}
        <section className="pt-24 pb-20">
          <h1 className={`${serif.className} text-5xl md:text-6xl font-medium mb-6 leading-none text-oxford`}>
            Kimberly Rufe
          </h1>
          <p className="text-xl text-bronze mb-10 font-medium">
            Appellate Counsel & Litigation Consultant
          </p>
          <p className="text-lg leading-loose text-oxford mb-12">
            I represent parties and assist trial counsel in appellate and record-driven litigation matters. My work focuses on issue selection, briefing, and procedural strategy in state and federal courts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <ObfuscatedEmail 
              label="For Attorneys — Consult / Referral"
              className="inline-block bg-oxford text-paper px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-bronze transition-colors text-center"
            />
            <a 
              href="https://aldermanlawfirm.com" 
              target="_blank"
              className="inline-block border border-oxford text-oxford px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-oxford hover:text-paper transition-colors text-center"
            >
              For Individuals — Start Here
            </a>
          </div>
        </section>

        {/* 2. WHAT I DO */}
        <section className="py-20">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            Record-Driven Advocacy
          </h2>
          <p className="text-lg leading-loose text-oxford mb-10">
            My practice is dedicated to stages of litigation where the outcome turns on the written record. I partner with trial counsel to ensure the legal theory is preserved, articulated, and persuasive.
          </p>
          
          <ul className="space-y-4 mb-12 text-oxford text-lg">
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">01</span>
              <span>Appeals in Colorado appellate courts and the Tenth Circuit</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">02</span>
              <span>Issue preservation and error analysis</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">03</span>
              <span>Record review and procedural strategy</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">04</span>
              <span>Brief drafting and motion practice</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">05</span>
              <span>Post-trial and post-judgment motions</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">06</span>
              <span>Advisory/consulting support to trial counsel</span>
            </li>
            <li className="flex gap-4 items-baseline">
              <span className="text-bronze text-sm">07</span>
              <span>Dispositive and contract-based briefing</span>
            </li>
          </ul>
          
          <blockquote className="border-l-2 border-bronze pl-6 py-1 my-12">
            <p className="text-oxford italic leading-relaxed">
              "Many matters are not yet on appeal; I am often brought in to evaluate the record, frame issues, or assist with briefing before or after judgment. I do not co-chair on trial-level litigation or ongoing case management; my role is limited to appellate, briefing, and discrete litigation consulting."
            </p>
          </blockquote>
        </section>

        {/* 3. REFERRAL MECHANICS */}
        <section className="py-20">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            How Referrals Work
          </h2>
          
          <p className="text-lg text-oxford mb-10 leading-loose">
            I can appear as counsel of record or work in a consulting capacity. Trial counsel may remain involved as desired. Consults may be limited to discrete procedural questions or extend through full briefing.
          </p>
          
          <div className="space-y-4 text-oxford">
            <p>I also work with out-of-state attorneys, including Wisconsin, in a consulting or drafting capacity. In trial-level matters, local counsel remains counsel of record and I assist with research, issue analysis, and briefing.</p>
          </div>
        </section>

        {/* 4. ADMISSIONS (Reverted to Single List) */}
        <section className="py-20">
          <h2 className={`${serif.className} text-3xl font-medium mb-10 text-oxford`}>
            Admissions
          </h2>
          <ul className={`space-y-3 text-oxford text-lg ${serif.className}`}>
            <li>United States Court of Appeals for the Tenth Circuit</li>
            <li>United States Court of Appeals for the Seventh Circuit</li>
            <li>United States Court of Appeals for the Sixth Circuit</li>
            <li>United States District Court for the District of Colorado</li>
            <li>Colorado</li>
            <li>Wisconsin</li>
            <li>Supreme Court of the United States</li>
          </ul>
        </section>

        {/* 5. BIO & WRITING PROOF */}
        <section className="py-20">
          <div className="mb-12">
             {/* Image - Adjusted for full head visibility */}
            <div className="w-full max-w-sm mb-10">
               <img 
                  src="/kimberly-rufe-portrait.jpg" 
                  alt="Kimberly Rufe" 
                  className="w-full h-auto object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
                  style={{ maxHeight: '500px', objectPosition: 'top' }} 
                />
            </div>

            <p className="text-lg leading-loose text-oxford mb-8">
              My practice focuses on record-driven litigation—the work that wins or loses on a clear, persuasive written argument. I work with trial counsel and parties to evaluate appellate options, frame issues for appeal, and draft briefs and motions that courts actually read.
            </p>
            <p className="text-lg leading-loose text-oxford">
              Most of my work involves collaborating with trial counsel who remain closely involved in the case. I bring appellate perspective to trial strategy and procedural choices, and I handle the specialized work of motion drafting and record analysis that trial lawyers often need to outsource.
            </p>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="py-20 pb-32">
          <h2 className={`${serif.className} text-3xl font-medium mb-8 text-oxford`}>
            Contact
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-bronze mb-2 font-bold">Email</p>
              <ObfuscatedEmail className="text-xl text-oxford hover:text-bronze transition-colors border-b border-oxford/20 pb-1" />
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-bronze mb-2 font-bold">Schedule</p>
              <ObfuscatedEmail 
                label="Email to request a consult time →"
                className="text-lg text-oxford hover:text-bronze transition-colors" 
              />
            </div>
          </div>
          
          <p className="text-sm text-oxford/60 mt-12 italic">
            Conflict checks are handled prior to representation. No intake questionnaire required.
          </p>
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
