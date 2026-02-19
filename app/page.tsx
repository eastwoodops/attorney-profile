import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"] });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#FAF8F3] text-[#1a1a1a] ${sans.className}`}>
      
      {/* HEADER */}
      <header className="border-b border-[#1a1a1a]/10 sticky top-0 bg-[#FAF8F3] z-50">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
          <h1 className={`${serif.className} text-xl font-semibold tracking-tight`}>
            Kimberly Rufe
          </h1>
          <a 
            href="https://aldermanlawfirm.com" 
            className="text-xs uppercase tracking-widest text-[#8B7355] hover:text-[#1a1a1a] transition-colors"
          >
            Alderman Law Firm →
          </a>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="border-b border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-32">
          <h1 className={`${serif.className} text-5xl md:text-6xl font-semibold mb-4 leading-tight`}>
            Kimberly Rufe
          </h1>
          <p className="text-lg md:text-xl text-[#8B7355] mb-8 font-semibold">
            Appellate Counsel & Litigation Consultant
          </p>
          <p className="text-lg leading-relaxed mb-12 text-[#1a1a1a] max-w-2xl">
            I represent parties and assist trial counsel in appellate and record-driven litigation matters. My work focuses on issue selection, briefing, and procedural strategy in state and federal courts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="inline-block bg-[#1a1a1a] text-[#FAF8F3] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#8B7355] transition-colors"
            >
              For Attorneys — Consult / Referral
            </a>
            <a 
              href="https://aldermanlawfirm.com" 
              className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#1a1a1a] hover:text-[#FAF8F3] transition-colors"
            >
              For Individuals — Start Here
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT I DO */}
      <section className="border-b border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <p className="text-lg mb-8 italic text-[#1a1a1a]">
            I work with lawyers and clients at stages where legal outcome depends on the written record.
          </p>
          
          <ul className="space-y-4 mb-12 text-[#1a1a1a]">
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Appeals in Colorado appellate courts and the Tenth Circuit</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Issue preservation and error analysis</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Record review and procedural strategy</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Brief drafting and motion practice</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Post-trial and post-judgment motions</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Advisory/consulting support to trial counsel</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Dispositive and contract-based briefing</span>
            </li>
          </ul>
          
          <p className="text-[#1a1a1a] leading-relaxed">
            Many matters are not yet on appeal; I am often brought in to evaluate the record, frame issues, or assist with briefing before or after judgment. I do not co-chair on trial-level litigation or ongoing case management; my role is limited to appellate, briefing, and discrete litigation consulting.
          </p>
        </div>
      </section>

      {/* SECTION 3: ADMISSIONS */}
      <section className="border-b border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <h2 className={`${serif.className} text-2xl font-semibold mb-12 text-[#1a1a1a]`}>
            Admissions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-3 text-[#1a1a1a]">
              <li>United States Court of Appeals for the Tenth Circuit</li>
              <li>United States Court of Appeals for the Seventh Circuit</li>
              <li>United States Court of Appeals for the Sixth Circuit</li>
            </ul>
            <ul className="space-y-3 text-[#1a1a1a]">
              <li>United States District Court for the District of Colorado</li>
              <li>Colorado</li>
              <li>Wisconsin</li>
              <li>Supreme Court of the United States</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW REFERRALS WORK */}
      <section className="border-b border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <h2 className={`${serif.className} text-2xl font-semibold mb-8 text-[#1a1a1a]`}>
            How Referrals Work
          </h2>
          
          <p className="text-[#1a1a1a] mb-10 leading-relaxed">
            I can appear as counsel of record or work in a consulting capacity. Trial counsel may remain involved as desired. Consults may be limited to discrete procedural questions or extend through full briefing.
          </p>
          
          <ul className="space-y-3 mb-10 text-[#1a1a1a]">
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Direct referral representation</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Behind-the-scenes consulting</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Issue evaluation</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Drafting and editing dispositive briefs</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8B7355] font-semibold">•</span>
              <span>Strategy consultation before filing</span>
            </li>
          </ul>
          
          <p className="text-[#1a1a1a] leading-relaxed">
            I also work with out-of-state attorneys, including Wisconsin, in a consulting or drafting capacity. In trial-level matters, local counsel remains counsel of record and I assist with research, issue analysis, and briefing. Much of this work arises from appellate and post-judgment issues involving written agreements or court rulings.
          </p>
        </div>
      </section>

      {/* SECTION 5: ROUTING BLOCK */}
      <section className="border-b border-[#1a1a1a]/10 bg-[#F0EDE6]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
          <h2 className={`${serif.className} text-2xl font-semibold mb-6 text-[#1a1a1a]`}>
            Not a lawyer?
          </h2>
          <p className="text-[#1a1a1a] mb-8 leading-relaxed">
            If you were referred to me for help with a dispute or personal legal matter, please begin at Alderman Law Firm. That site explains the types of disputes I personally handle and is the correct starting point for representation if you are not an attorney.
          </p>
          <a 
            href="https://aldermanlawfirm.com" 
            className="inline-block bg-[#1a1a1a] text-[#FAF8F3] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#8B7355] transition-colors"
          >
            Go to Alderman Law Firm
          </a>
        </div>
      </section>

      {/* SECTION 6: BIO */}
      <section className="border-b border-[#1a1a1a]/10">
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
            <div className="md:col-span-2 space-y-6 text-[#1a1a1a]">
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
      <section id="contact" className="border-b border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
          <h2 className={`${serif.className} text-2xl font-semibold mb-12 text-[#1a1a1a]`}>
            Contact
          </h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#8B7355] mb-3 font-semibold">Email</p>
              <a 
                href="mailto:kimberly@aldermanlawfirm.com" 
                className="text-lg text-[#1a1a1a] hover:text-[#8B7355] transition-colors break-all"
              >
                kimberly@aldermanlawfirm.com
              </a>
            </div>
            
            {/* Calendar Link */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#8B7355] mb-3 font-semibold">Schedule a Consult</p>
              <a 
                href="mailto:kimberly@aldermanlawfirm.com?subject=Schedule%20Consult" 
                className="inline-block text-[#1a1a1a] hover:text-[#8B7355] transition-colors underline"
              >
                Email to schedule →
              </a>
            </div>
          </div>
          
          <p className="text-xs text-[#1a1a1a]/60 mt-12">
            No intake questionnaire. Conflict checks are handled by email.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F0EDE6] border-t border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 text-sm text-[#1a1a1a]/70">
          <p className={`${serif.className} font-semibold text-[#1a1a1a] mb-6`}>
            Kimberly Rufe<br />
            <span className="text-xs uppercase tracking-widest font-normal">Attorney at Law</span>
          </p>
          
          <div className="space-y-3 text-xs mb-8">
            <p>
              <a 
                href="mailto:kimberly@aldermanlawfirm.com" 
                className="hover:text-[#1a1a1a] transition-colors"
              >
                kimberly@aldermanlawfirm.com
              </a>
            </p>
            <p>
              <a 
                href="https://aldermanlawfirm.com" 
                className="text-[#8B7355] hover:text-[#1a1a1a] transition-colors"
              >
                Alderman Law Firm
              </a>
            </p>
            <p>
              <a 
                href="#" 
                className="text-[#8B7355] hover:text-[#1a1a1a] transition-colors"
              >
                Colorado Bar Profile
              </a> (placeholder)
            </p>
          </div>
          
          <p className="text-xs border-t border-[#1a1a1a]/10 pt-8 text-[#1a1a1a]/60">
            This site does not constitute legal advice or establish an attorney-client relationship. Representation is not formed until a written engagement agreement is signed and any applicable conflicts checks are complete.
          </p>
        </div>
      </footer>

    </div>
  );
}
