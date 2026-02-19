"use client";

import { useState, useEffect } from "react";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500"] });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Email Obfuscation Component
const ObfuscatedEmail = ({ className = "", label = "" }) => {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Simple reconstruction to baffle basic scrapers
    const user = "kimberly";
    const domain = "aldermanlawfirm.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) return <span className={className}>Loading contact...</span>;

  return (
    <a 
      href={`mailto:${email}`} 
      className={className}
    >
      {label || email}
    </a>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-paper text-ink ${sans.className}`}>
      
      {/* HEADER */}
      <header className="border-b border-ink/10 sticky top-0 bg-paper z-50">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
          <h1 className={`${serif.className} text-xl font-medium tracking-tight`}>
            Kimberly Rufe
          </h1>
          <a 
            href="https://aldermanlawfirm.com" 
            className="text-xs uppercase tracking-widest text-bronze hover:text-ink transition-colors"
          >
            Alderman Law Firm →
          </a>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-32">
          <h1 className={`${serif.className} text-5xl md:text-6xl font-medium mb-4 leading-tight`}>
            Kimberly Rufe
          </h1>
          <p className="text-lg md:text-xl text-bronze mb-8 font-semibold">
            Appellate Counsel & Litigation Consultant
          </p>
          <p className="text-lg leading-relaxed mb-12 text-ink max-w-2xl">
            I represent parties and assist trial counsel in appellate and record-driven litigation matters. My work focuses on issue selection, briefing, and procedural strategy in state and federal courts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-ink text-paper px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors text-center"
            >
              For Attorneys — Consult / Referral
            </button>
            <a 
              href="https://aldermanlawfirm.com" 
              className="inline-block border border-ink text-ink px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-ink hover:text-paper transition-colors text-center"
            >
              For Individuals — Start Here
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT I DO */}
      <section className="border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <div className="mb-12">
            <h2 className={`${serif.className} text-3xl font-medium mb-6 text-ink`}>
              Record-Driven Advocacy
            </h2>
            <p className="text-lg leading-relaxed text-ink">
              My practice is dedicated to stages of litigation where the outcome turns on the written record. I partner with trial counsel to ensure the legal theory is preserved, articulated, and persuasive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-12 text-ink">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Appeals in Colorado appellate courts and the Tenth Circuit</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Issue preservation and error analysis</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Record review and procedural strategy</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Brief drafting and motion practice</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Post-trial and post-judgment motions</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Advisory/consulting support to trial counsel</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-bronze font-semibold mt-1">•</span>
                <span>Dispositive and contract-based briefing</span>
              </div>
            </div>
          </div>
          
          <div className="bg-ink/5 p-8 border-l-2 border-bronze">
            <p className="text-ink leading-relaxed italic">
              "Many matters are not yet on appeal; I am often brought in to evaluate the record, frame issues, or assist with briefing before or after judgment. I do not co-chair on trial-level litigation or ongoing case management; my role is limited to appellate, briefing, and discrete litigation consulting."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ADMISSIONS */}
      <section className="border-b border-ink/10 bg-paper-dark">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-24">
          <div className="border-l-2 border-bronze pl-8 md:pl-12 py-2">
            <h2 className={`${serif.className} text-3xl font-medium mb-10 text-ink`}>
              Court Admissions
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-bronze mb-4">Federal Jurisdictions</h3>
                <ul className={`space-y-2 text-ink ${serif.className} text-lg`}>
                  <li>Supreme Court of the United States</li>
                  <li>United States Court of Appeals for the Tenth Circuit</li>
                  <li>United States Court of Appeals for the Seventh Circuit</li>
                  <li>United States Court of Appeals for the Sixth Circuit</li>
                  <li>United States District Court for the District of Colorado</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-bronze mb-4">State Courts</h3>
                <ul className={`space-y-2 text-ink ${serif.className} text-lg`}>
                  <li>State of Colorado</li>
                  <li>State of Wisconsin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW REFERRALS WORK */}
      <section className="border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <h2 className={`${serif.className} text-2xl font-medium mb-8 text-ink`}>
            How Referrals Work
          </h2>
          
          <p className="text-ink mb-10 leading-relaxed">
            I can appear as counsel of record or work in a consulting capacity. Trial counsel may remain involved as desired. Consults may be limited to discrete procedural questions or extend through full briefing.
          </p>
          
          <ul className="space-y-3 mb-10 text-ink">
            <li className="flex gap-4">
              <span className="text-bronze font-semibold">•</span>
              <span>Direct referral representation</span>
            </li>
            <li className="flex gap-4">
              <span className="text-bronze font-semibold">•</span>
              <span>Behind-the-scenes consulting</span>
            </li>
            <li className="flex gap-4">
              <span className="text-bronze font-semibold">•</span>
              <span>Issue evaluation</span>
            </li>
            <li className="flex gap-4">
              <span className="text-bronze font-semibold">•</span>
              <span>Drafting and editing dispositive briefs</span>
            </li>
            <li className="flex gap-4">
              <span className="text-bronze font-semibold">•</span>
              <span>Strategy consultation before filing</span>
            </li>
          </ul>
          
          <p className="text-ink leading-relaxed">
            I also work with out-of-state attorneys, including Wisconsin, in a consulting or drafting capacity. In trial-level matters, local counsel remains counsel of record and I assist with research, issue analysis, and briefing. Much of this work arises from appellate and post-judgment issues involving written agreements or court rulings.
          </p>
        </div>
      </section>

      {/* SECTION 5: ROUTING BLOCK */}
      <section className="border-b border-ink/10 bg-paper-dark">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
          <h2 className={`${serif.className} text-2xl font-medium mb-6 text-ink`}>
            Not a lawyer?
          </h2>
          <p className="text-ink mb-8 leading-relaxed">
            If you were referred to me for help with a dispute or personal legal matter, please begin at Alderman Law Firm. That site explains the types of disputes I personally handle and is the correct starting point for representation if you are not an attorney.
          </p>
          <a 
            href="https://aldermanlawfirm.com" 
            className="inline-block bg-ink text-paper px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors"
          >
            Go to Alderman Law Firm
          </a>
        </div>
      </section>

      {/* SECTION 6: BIO */}
      <section className="border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Portrait */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square rounded overflow-hidden">
                <img 
                  src="/kimberly-rufe-portrait.jpg" 
                  alt="Kimberly Rufe" 
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
            
            {/* Text */}
            <div className="md:col-span-2 space-y-6 text-ink">
              <p className="leading-relaxed">
                My practice focuses on record-driven litigation—the work that wins or loses on a clear, persuasive written argument. I work with trial counsel and parties to evaluate appellate options, frame issues for appeal, and draft briefs and motions that courts actually read.
              </p>
              <p className="leading-relaxed">
                Most of my work involves collaborating with trial counsel who remain closely involved in the case. I bring appellate perspective to trial strategy and procedural choices, and I handle the specialized work of motion drafting and record analysis that trial lawyers often need to outsource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT */}
      <section id="contact" className="border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <h2 className={`${serif.className} text-2xl font-medium mb-12 text-ink`}>
            Contact
          </h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm uppercase tracking-widest text-bronze mb-3 font-semibold">Email</p>
              <ObfuscatedEmail 
                className="text-lg text-ink hover:text-bronze transition-colors break-all" 
              />
            </div>
            
            {/* Consult Button Trigger */}
            <div>
              <p className="text-sm uppercase tracking-widest text-bronze mb-3 font-semibold">Attorney Intake</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-block text-ink hover:text-bronze transition-colors underline text-left"
              >
                Open intake form →
              </button>
            </div>
          </div>
          
          <p className="text-xs text-ink/60 mt-12">
            Conflict checks are handled prior to representation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-paper-dark border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 text-sm text-ink/70">
          <p className={`${serif.className} font-semibold text-ink mb-6`}>
            Kimberly Rufe<br />
            <span className="text-xs uppercase tracking-widest font-normal">Attorney at Law</span>
          </p>
          
          <div className="space-y-3 text-xs mb-8">
            <p>
              <ObfuscatedEmail className="hover:text-ink transition-colors" />
            </p>
            <p>
              <a 
                href="https://aldermanlawfirm.com" 
                className="text-bronze hover:text-ink transition-colors"
              >
                Alderman Law Firm
              </a>
            </p>
            <p>
              <span className="text-bronze">
                Colorado Bar Registration No. 48050
              </span>
            </p>
          </div>
          
          <p className="text-xs border-t border-ink/10 pt-8 text-ink/60">
            This site does not constitute legal advice or establish an attorney-client relationship. Representation is not formed until a written engagement agreement is signed and any applicable conflicts checks are complete.
          </p>
        </div>
      </footer>

      {/* INTAKE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-paper w-full max-w-lg shadow-2xl border border-ink/10 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className={`${serif.className} text-2xl font-medium text-ink`}>Attorney Intake</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-ink/40 hover:text-ink transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-ink/20 p-3 text-ink focus:border-bronze focus:outline-none transition-colors" placeholder="Referring Attorney" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">Firm / Org</label>
                  <input type="text" className="w-full bg-white border border-ink/20 p-3 text-ink focus:border-bronze focus:outline-none transition-colors" placeholder="Law Firm Name" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-ink/20 p-3 text-ink focus:border-bronze focus:outline-none transition-colors" placeholder="attorney@firm.com" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">Case Caption / Subject</label>
                  <input type="text" className="w-full bg-white border border-ink/20 p-3 text-ink focus:border-bronze focus:outline-none transition-colors" placeholder="Smith v. Jones (10th Cir.)" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-ink/20 p-3 text-ink focus:border-bronze focus:outline-none transition-colors" placeholder="Brief description of procedural posture and assistance needed..."></textarea>
                </div>

                <button className="w-full bg-ink text-paper py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors">
                  Send Inquiry
                </button>
                
                <p className="text-center text-xs text-ink/40 pt-2">
                  This form is for attorney inquiries. Confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
