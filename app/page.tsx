import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#F5F5F0] text-[#1E293B] ${sourceSans.className}`}>
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-[#0F172A]/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-6xl md:text-7xl font-semibold text-[#0F172A] leading-[1.1] mb-8`}>
              Appellate & Complex <br/>Civil Litigation.
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-12 max-w-2xl">
              When the trial goes wrong, the record speaks. We handle the appeal and enforce the judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#0F172A] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1E293B] transition-colors rounded-none">
                Review Your Case
              </button>
              <button className="border border-[#0F172A] text-[#0F172A] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#0F172A] hover:text-white transition-colors rounded-none">
                Practice Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SIGNALS (Bar) */}
      <div className="border-b border-[#0F172A]/5 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className={`${playfair.className} text-xl font-bold text-[#0F172A]`}>U.S. Supreme Court Bar</span>
          <span className={`${playfair.className} text-xl font-bold text-[#0F172A]`}>10th Circuit Court of Appeals</span>
          <span className={`${playfair.className} text-xl font-bold text-[#0F172A]`}>Colorado Supreme Court</span>
          <span className={`${playfair.className} text-xl font-bold text-[#0F172A]`}>Colorado Court of Appeals</span>
        </div>
      </div>

      {/* 3. PHILOSOPHY */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className={`${playfair.className} text-4xl font-semibold text-[#0F172A] mb-6`}>
              A Practice Built on the Record.
            </h2>
            <div className="h-px w-12 bg-[#C5A059] mb-6"></div>
          </div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`${playfair.className} text-2xl font-medium text-[#0F172A] mb-3`}>Appellate Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Appeals require a different skill set than trials. We analyze the record for reversible error and write briefs designed for judges, not juries.
              </p>
            </div>
            <div>
              <h3 className={`${playfair.className} text-2xl font-medium text-[#0F172A] mb-3`}>Document Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                In complex civil disputes—from promissory notes to real estate—the answer is in the documents. We strip away the noise to enforce the written terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F0] border-t border-[#0F172A]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className={`${playfair.className} text-4xl font-semibold text-[#0F172A]`}>Practice Areas</h2>
            <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059] pb-1 hover:text-[#0F172A] hover:border-[#0F172A] transition-colors">View All Capabilities</a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Appellate Representation", desc: "Civil and criminal appeals in state and federal courts." },
              { title: "Note Enforcement", desc: "Collecting unpaid loans and enforcing judgments." },
              { title: "Breach of Contract", desc: "Disputes over written agreements and performance." },
              { title: "Real Estate", desc: "Title, ownership, and transaction failures." }
            ].map((area, i) => (
              <div key={i} className="group bg-white p-8 border border-slate-200 hover:border-[#C5A059] transition-colors shadow-sm">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-4 block">0{i+1}</span>
                <h3 className={`${playfair.className} text-2xl text-[#0F172A] mb-3 group-hover:text-[#C5A059] transition-colors`}>{area.title}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{area.desc}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A] border-b border-transparent group-hover:border-[#0F172A] pb-0.5 transition-all">Details</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY BIO */}
      <section className="py-24 px-6 md:px-12 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 block">Principal Attorney</span>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold mb-6`}>Jerold A. Alderman</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              "The appeal is not a re-do of the trial. It is a precise surgical intervention on the record."
            </p>
            <ul className="space-y-4 mb-10 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#C5A059]"></div> 300+ Appellate Briefs Filed
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#C5A059]"></div> Former Law Clerk
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#C5A059]"></div> 30+ Years Experience
              </li>
            </ul>
            <button className="border border-white text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-colors rounded-none">
              Read Biography
            </button>
          </div>
          <div className="order-1 md:order-2 relative h-[500px] w-full bg-[#1E293B] flex items-center justify-center border border-white/10">
            <span className="text-white/20 font-serif italic text-2xl">[Portrait Placeholder]</span>
          </div>
        </div>
      </section>

      {/* 6. FAQ / FOOTER CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-4xl font-semibold text-[#0F172A] mb-6`}>
            Is Your Judgment Final?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Time is the enemy of an appeal. Strict deadlines apply to post-trial motions and notices of appeal. Do not wait to review the record.
          </p>
          <button className="bg-[#0F172A] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-colors rounded-none shadow-xl shadow-[#0F172A]/10">
            Schedule a Case Review
          </button>
          <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest">Confidential & Secure</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F5F5F0] border-t border-[#0F172A]/10 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-2">
            <span className={`${playfair.className} text-2xl font-bold text-[#0F172A] block mb-4`}>ALDERMAN</span>
            <p className="text-slate-500 max-w-xs">
              Premium appellate and civil litigation representation for businesses and individuals in Colorado and Federal Courts.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A] uppercase tracking-widest mb-6 text-xs">Contact</h4>
            <div className="space-y-2 text-slate-600">
              <p>418 S Howes St</p>
              <p>Fort Collins, CO 80521</p>
              <p className="mt-4">720-588-3529</p>
              <p>info@aldermanlawfirm.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A] uppercase tracking-widest mb-6 text-xs">Practice</h4>
            <div className="space-y-2 text-slate-600">
              <p>Appeals</p>
              <p>Contracts</p>
              <p>Real Estate</p>
              <p>Collections</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#0F172A]/5 flex justify-between text-xs text-slate-400">
          <p>© 2026 Alderman Law Firm. All Rights Reserved.</p>
          <div className="space-x-6">
            <span>Disclaimer</span>
            <span>Privacy</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
