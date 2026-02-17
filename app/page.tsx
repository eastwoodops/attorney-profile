import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#F5F5F0] text-[#1E293B] ${sourceSans.className}`}>
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-48 px-6 md:px-12 border-b border-[#0F172A]/5">
        <div className="container-legal">
          <div className="max-w-4xl">
            {/* Logo Incorporation */}
            <div className="mb-12">
              <img src="/alderman_logo.png" alt="Alderman Law Firm" className="h-16 object-contain" />
            </div>
            
            <h1 className={`${playfair.className} mb-12`}>
              Appellate & Complex <br/>Civil Litigation.
            </h1>
            <p className="prose-legal text-xl md:text-2xl mb-16 text-slate-600 max-w-2xl">
              When the trial goes wrong, the record speaks. We handle the appeal and enforce the judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#0F172A] text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1E293B] transition-colors rounded-none">
                Review Your Case
              </button>
              <button className="border border-[#0F172A] text-[#0F172A] px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0F172A] hover:text-white transition-colors rounded-none">
                Practice Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SIGNALS (Bar) */}
      <div className="border-b border-[#0F172A]/5 bg-[#FAF9F6]">
        <div className="container-legal py-12 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className={`${playfair.className} text-lg md:text-xl font-medium text-[#0F172A]`}>U.S. Supreme Court Bar</span>
          <span className={`${playfair.className} text-lg md:text-xl font-medium text-[#0F172A]`}>10th Circuit Court of Appeals</span>
          <span className={`${playfair.className} text-lg md:text-xl font-medium text-[#0F172A]`}>Colorado Supreme Court</span>
          <span className={`${playfair.className} text-lg md:text-xl font-medium text-[#0F172A]`}>Colorado Court of Appeals</span>
        </div>
      </div>

      {/* 3. PHILOSOPHY */}
      <section className="py-32 bg-white">
        <div className="container-legal grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-serif italic text-xl shrink-0 mt-2">
              N
            </div>
            <div>
              <h2 className="leading-tight">
                A Practice Built on the Record.
              </h2>
              <div className="h-1 w-16 bg-[#C5A059] mt-8"></div>
            </div>
          </div>
          <div className="md:col-span-7 grid md:grid-cols-2 gap-12 pt-2">
            <div>
              <h3 className="mb-4 text-xl md:text-2xl">Appellate Focus</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Appeals require a different skill set than trials. We analyze the record for reversible error and write briefs designed for judges, not juries.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl md:text-2xl">Document Precision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                In complex civil disputes—from promissory notes to real estate—the answer is in the documents. We strip away the noise to enforce the written terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS */}
      <section className="py-32 bg-[#F5F5F0]">
        <div className="container-legal">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl">Practice Areas</h2>
            <a href="#" className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] border-b border-[#C5A059] pb-2 hover:text-[#0F172A] hover:border-[#0F172A] transition-colors">View All Areas of Practice</a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Appellate Representation", desc: "Civil and criminal appeals in state and federal courts." },
              { title: "Note Enforcement", desc: "Collecting unpaid loans and enforcing judgments." },
              { title: "Breach of Contract", desc: "Disputes over written agreements and performance." },
              { title: "Real Estate", desc: "Title, ownership, and transaction failures." }
            ].map((area, i) => (
              <div key={i} className="group bg-white p-10 border border-slate-200 hover:border-[#C5A059] transition-all duration-300 shadow-sm flex flex-col h-full min-h-[320px]">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mb-6 block">0{i+1}</span>
                <h3 className="text-2xl text-[#0F172A] mb-4 group-hover:text-[#C5A059] transition-colors duration-300 leading-tight">{area.title}</h3>
                <p className="text-xs text-slate-500 mb-8 leading-relaxed flex-grow">{area.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A] border-b border-transparent group-hover:border-[#0F172A] pb-1 transition-all self-start">Details</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY BIO */}
      <section className="bg-[#0F172A] text-white overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[700px]">
          {/* Text Side */}
          <div className="p-12 md:p-24 flex flex-col justify-center border-r border-white/5">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 block">Principal Attorney</span>
            <h2 className="text-white text-4xl md:text-5xl font-semibold mb-8 leading-tight">Jerold A. Alderman</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md italic font-serif">
              "The appeal is not a re-do of the trial. It is a precise surgical intervention on the record."
            </p>
            <ul className="space-y-4 mb-16 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 bg-[#C5A059]"></div> 300+ Appellate Briefs Filed
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 bg-[#C5A059]"></div> Former Law Clerk
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 bg-[#C5A059]"></div> 30+ Years Experience
              </li>
            </ul>
            <button className="border border-white/20 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0F172A] transition-colors self-start">
              Read Biography
            </button>
          </div>
          
          {/* Image Side */}
          <div className="relative bg-[#1E293B] border-t md:border-t-0 md:border-l border-white/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/10 font-serif italic text-3xl">[Portrait Placeholder]</span>
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* 6. FAQ / FOOTER CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="mb-8 text-5xl">
            Is Your Judgment Final?
          </h2>
          <p className="prose-legal text-lg text-slate-500 mb-16 mx-auto leading-loose">
            Time is the enemy of an appeal. Strict deadlines apply to post-trial motions and notices of appeal. Do not wait to review the record.
          </p>
          <button className="bg-[#0F172A] text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors shadow-2xl shadow-[#0F172A]/20">
            Schedule a Case Review
          </button>
          <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-[0.2em]">Confidential & Secure</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F5F5F0] border-t border-[#0F172A]/5 py-24 px-6 md:px-12">
        <div className="container-legal grid md:grid-cols-12 gap-12 text-xs">
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
