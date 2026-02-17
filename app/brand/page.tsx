export default function BrandPage() {
  return (
    <div className="min-h-screen bg-paper p-8 md:p-16 font-sans text-charcoal">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Header */}
        <header className="border-b border-navy/10 pb-12">
          <div className="flex justify-between items-start mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-gold">
              Alderman Law Firm
            </div>
            <div className="text-xs font-mono text-slate-400">
              Brand Identity System v1.1
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl mb-8 text-navy font-serif font-semibold tracking-tight">
            Authority & Restraint.
          </h1>
          <p className="prose-legal text-xl max-w-2xl text-slate-600">
            A visual identity designed to convey competence, not noise. 
            Prioritizing clarity, "expensive" whitespace, and document-driven aesthetics.
          </p>
        </header>

        {/* LOGO */}
        <section className="grid md:grid-cols-12 gap-12 border-b border-navy/10 pb-24">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">01. Identity Mark</h4>
            <p className="text-sm text-slate-600">
              The logotype relies on classic serif typography. It is understated and permanent.
            </p>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="p-16 bg-white border border-slate-100 flex items-center justify-center">
              {/* Typographic Logo Placeholder */}
              <div className="text-center">
                <span className="block font-serif text-3xl text-navy tracking-wide font-semibold">
                  ALDERMAN
                </span>
                <span className="block font-sans text-xs text-gold uppercase tracking-[0.3em] mt-1">
                  Law Firm
                </span>
              </div>
            </div>
            <div className="p-16 bg-navy flex items-center justify-center">
              <div className="text-center">
                <span className="block font-serif text-3xl text-white tracking-wide font-semibold">
                  ALDERMAN
                </span>
                <span className="block font-sans text-xs text-gold uppercase tracking-[0.3em] mt-1">
                  Law Firm
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* COLOR */}
        <section className="grid md:grid-cols-12 gap-12 border-b border-navy/10 pb-24">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">02. Color Palette</h4>
            <p className="text-sm text-slate-600">
              "The Adult in the Room." Deep, grounded Oxford Blue paired with a restrained Antique Bronze. 
              No bright "tech" blues.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-32 w-full bg-navy shadow-sm"></div>
              <div>
                <p className="font-bold text-navy text-sm">Oxford Blue</p>
                <p className="font-mono text-xs text-slate-400">#0F172A</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-32 w-full bg-gold shadow-sm"></div>
              <div>
                <p className="font-bold text-navy text-sm">Antique Bronze</p>
                <p className="font-mono text-xs text-slate-400">#C5A059</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-32 w-full bg-paper border border-slate-200 shadow-sm"></div>
              <div>
                <p className="font-bold text-navy text-sm">Legal Paper</p>
                <p className="font-mono text-xs text-slate-400">#F5F5F0</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-32 w-full bg-charcoal shadow-sm"></div>
              <div>
                <p className="font-bold text-navy text-sm">Charcoal</p>
                <p className="font-mono text-xs text-slate-400">#1E293B</p>
              </div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="grid md:grid-cols-12 gap-12 border-b border-navy/10 pb-24">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">03. Typography</h4>
            <p className="text-sm text-slate-600 mb-6">
              <strong>Headings:</strong> Playfair Display. High contrast, editorial authority.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Body:</strong> Source Sans 3. Humanist, highly legible, optimized for long-form reading with loose leading (1.7).
            </p>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="space-y-6 border-l border-gold/30 pl-8">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H1 / 6xl / Semibold</span>
                <h1>Appellate Representation</h1>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H2 / 4xl / Semibold</span>
                <h2>The Record Speaks</h2>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H3 / 2xl / Medium</span>
                <h3>Disputes over documents</h3>
              </div>
            </div>
            
            <div className="max-w-prose">
              <span className="text-xs font-mono text-slate-400 block mb-2">Body / Base / Leading-Loose</span>
              <p className="text-lg text-slate-700 leading-relaxed">
                Most clients call an appellate attorney after a shock. The verdict came back wrong. 
                The judge made a ruling that gutted your case. The trial didn't end the dispute; 
                it just shifted the battlefield.
              </p>
            </div>
          </div>
        </section>

        {/* LAYOUT */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">04. Layout Principles</h4>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Expensive Air:</strong> High density implies cheapness. We use aggressive whitespace (6rem+ sections) to signal value.
            </p>
            <p className="text-sm text-slate-600">
              <strong>The Grid:</strong> Strictly bounded text containers (65ch) for cognitive ease. No full-bleed text.
            </p>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            {/* Rhythm Diagram */}
            <div className="w-full bg-slate-100 p-8 space-y-8 border border-slate-200">
              <div className="h-4 bg-navy/10 w-1/3 mx-auto"></div>
              <div className="h-64 bg-white shadow-sm border-t-4 border-gold mx-auto max-w-sm p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-8 h-8 bg-navy/20 rounded-full"></div>
                <div className="h-2 bg-slate-200 w-3/4"></div>
                <div className="h-2 bg-slate-200 w-1/2"></div>
              </div>
              <div className="h-4 bg-navy/10 w-1/3 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 border-l-2 border-navy">
                <span className="text-xs font-bold text-navy uppercase block mb-2">Symmetry</span>
                <p className="text-xs text-slate-500">Used for "Verdict" moments (Hero, Mission). Stability.</p>
              </div>
              <div className="bg-white p-6 border-l-2 border-gold">
                <span className="text-xs font-bold text-navy uppercase block mb-2">Asymmetry</span>
                <p className="text-xs text-slate-500">Used for "Evidence" moments (Details, Bios). Movement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESTRAINT GUIDELINES */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">05. Visual Restraint</h4>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Credibility Rule:</strong> Noise reduces trust. We remove visual decoration to signal competence.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DO */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-navy bg-paper border border-navy px-2 py-1 inline-block">DO: The Evidence</span>
              <div className="bg-white border border-slate-200 p-6 space-y-4">
                <div className="h-24 bg-slate-100 flex items-center justify-center text-slate-400 text-xs italic">
                  [Texture: High-grain paper / Stone]
                </div>
                <div>
                  <h3 className="text-lg mb-2">Sharp Precision</h3>
                  <button className="border border-navy text-navy text-xs uppercase px-4 py-2 hover:bg-navy hover:text-white transition-colors">
                    Review Case
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Sharp corners. 1px borders. Desaturated imagery.
                </p>
              </div>
            </div>

            {/* DON'T */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-1 inline-block decoration-line-through">DON'T: The Startup</span>
              <div className="bg-white border border-slate-200 p-6 space-y-4 opacity-50">
                <div className="h-24 bg-blue-100 flex items-center justify-center text-blue-400 text-xs">
                  [Stock Photo: Shaking Hands]
                </div>
                <div>
                  <h3 className="text-lg mb-2">Friendly & Fun</h3>
                  <button className="bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    Click Me!
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Drop shadows. Rounded corners. Bright blues. Generic metaphors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTAKE UX */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest">06. Intake UX</h4>
            <p className="text-sm text-slate-600 mb-4">
              <strong>The Velvet Rope:</strong> We don't beg for leads. We offer a secure, privileged channel for qualified case reviews.
            </p>
            <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
              <li>High-trust microcopy</li>
              <li>"Paper-like" input fields</li>
              <li>Clear privacy signals</li>
            </ul>
          </div>
          
          <div className="md:col-span-8">
            <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-navy">Request Confidential Review</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Submit your details for a preliminary conflict check and case assessment. 
                    Your information is held in strict confidence.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-xs text-slate-500 uppercase tracking-widest font-semibold">
                      <div className="w-2 h-2 bg-navy rounded-full"></div> Direct Line: 720-588-3529
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 uppercase tracking-widest font-semibold">
                      <div className="w-2 h-2 bg-navy rounded-full"></div> Fort Collins Office
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Full Name</label>
                    <div className="border-b border-slate-300 py-2">
                      <span className="text-slate-400 italic text-sm">Enter your legal name...</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Case Type</label>
                    <div className="border-b border-slate-300 py-2 flex justify-between items-center">
                      <span className="text-navy text-sm">Appellate Representation</span>
                      <span className="text-slate-400 text-xs">▼</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-navy text-white px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-charcoal transition-colors flex justify-between items-center group">
                      <span>Begin Secure Transmission</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-3 flex justify-center items-center gap-1">
                      <span>🔒</span> Encrypted & Privileged
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
