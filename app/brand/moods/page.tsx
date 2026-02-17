import Link from "next/link";

export default function MoodsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="max-w-7xl mx-auto p-8 md:p-16">
        
        <header className="mb-16 border-b border-slate-200 pb-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/brand" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-800 transition-colors">
              ← Back to System
            </Link>
            <span className="text-xs font-mono text-slate-400">Phase 02: Aesthetic Direction</span>
          </div>
          <h1 className="text-5xl font-serif text-slate-900 mb-6">Visual Mood Directions</h1>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Three distinct interpretations of the "Premium & Authoritative" core. 
            All use the same brand tokens but deploy them to create different psychological environments.
          </p>
        </header>

        <div className="space-y-32">

          {/* DIRECTION 1: THE SCHOLAR */}
          <section className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-serif text-slate-900">01. The Scholar</h2>
              <div className="h-1 w-12 bg-[#C5A059]"></div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Tone:</strong> Intellectual, Rigorous, Historic.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Color:</strong> Dominant "Legal Paper" (#F5F5F0) background.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Type:</strong> Serif-forward. Headings feel like book titles.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Impression:</strong> "They wrote the book on this."</li>
              </ul>
            </div>
            
            <div className="lg:col-span-8 bg-[#F5F5F0] p-12 border border-[#E5E5DE] shadow-sm relative overflow-hidden">
              {/* Mockup */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]"></div>
              <div className="max-w-lg mx-auto text-center space-y-8 my-8">
                <span className="font-serif italic text-[#0F172A]/60 text-lg">Est. 2012</span>
                <h3 className="text-5xl font-serif text-[#0F172A] leading-tight">
                  The Record <br/> Speaks.
                </h3>
                <p className="font-sans text-[#1E293B] leading-loose text-sm">
                  We do not rely on courtroom theatrics. We rely on the written word, 
                  the precise citation, and the rigorous analysis of the record.
                </p>
                <button className="border-b border-[#0F172A] pb-1 text-[#0F172A] font-serif italic hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                  Read Our Philosophy
                </button>
              </div>
            </div>
          </section>

          {/* DIRECTION 2: THE SENTINEL */}
          <section className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-serif text-slate-900">02. The Sentinel</h2>
              <div className="h-1 w-12 bg-[#0F172A]"></div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Tone:</strong> Protective, Exclusive, High-Stakes.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Color:</strong> Heavy Navy (#0F172A) usage. Dark mode luxury.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Type:</strong> High contrast white text. Minimalist sans-serif body.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Impression:</strong> "The adult in the room."</li>
              </ul>
            </div>
            
            <div className="lg:col-span-8 bg-[#0F172A] p-12 shadow-xl relative">
              {/* Mockup */}
              <div className="flex justify-between items-start mb-16">
                <span className="text-white font-serif tracking-widest text-lg">ALDERMAN</span>
                <div className="w-8 h-8 border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059] text-xs">A</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 block">Appellate Advocacy</span>
                  <h3 className="text-4xl font-serif text-white mb-6">
                    When the trial goes wrong.
                  </h3>
                  <button className="bg-[#C5A059] text-[#0F172A] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Review Case
                  </button>
                </div>
                <div className="border-l border-white/10 pl-8 flex flex-col justify-end">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Protecting judgments and reversing errors in the 10th Circuit and Colorado Supreme Court.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DIRECTION 3: THE ARCHITECT */}
          <section className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-serif text-slate-900">03. The Architect</h2>
              <div className="h-1 w-12 bg-slate-300"></div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Tone:</strong> Surgical, Modern, Precise.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Color:</strong> High-white backgrounds. Navy ink. Very sparse Gold.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Type:</strong> Grid-locked. Heavy use of hairlines and borders.</li>
                <li className="flex gap-3"><strong className="text-slate-900 min-w-[80px]">Impression:</strong> "Clean up the mess."</li>
              </ul>
            </div>
            
            <div className="lg:col-span-8 bg-white border border-slate-200 p-0 shadow-sm">
              {/* Mockup */}
              <div className="grid grid-cols-2 border-b border-slate-100">
                <div className="p-8 border-r border-slate-100">
                  <h3 className="text-2xl font-serif text-[#0F172A] mb-2">Structure</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Document Driven</p>
                </div>
                <div className="p-8 flex items-center justify-end">
                  <span className="text-[#0F172A] font-bold text-sm">720-588-3529</span>
                </div>
              </div>
              <div className="p-12">
                <h2 className="text-5xl font-serif text-[#0F172A] mb-8 leading-[1.1]">
                  Complex Litigation <br/> Simplified.
                </h2>
                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                  <div>
                    <span className="block text-2xl font-serif text-[#0F172A]">300+</span>
                    <span className="text-xs text-slate-400 uppercase">Briefs</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif text-[#0F172A]">10th</span>
                    <span className="text-xs text-slate-400 uppercase">Circuit</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif text-[#0F172A]">13</span>
                    <span className="text-xs text-slate-400 uppercase">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
