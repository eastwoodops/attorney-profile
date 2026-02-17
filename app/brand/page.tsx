export default function BrandPage() {
  return (
    <div className="min-h-screen bg-paper p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="border-b border-navy/10 pb-8">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2">Internal Review</p>
          <h1 className="text-5xl text-navy">Brand Identity System</h1>
          <p className="mt-4 text-lg text-slate-600 font-sans max-w-2xl">
            A restrained, authoritative visual language designed to convey competence and high-trust. 
            Prioritizing clarity and "document-driven" aesthetics over corporate trends.
          </p>
        </header>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl border-b border-navy/10 pb-2">01. Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-32 bg-navy rounded-sm shadow-sm"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-navy">Oxford Blue</span>
                <span className="font-mono text-xs text-slate-500">#0F172A</span>
              </div>
              <p className="text-xs text-slate-500">Primary. Authoritative, deep, grounded.</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-gold rounded-sm shadow-sm"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-navy">Antique Bronze</span>
                <span className="font-mono text-xs text-slate-500">#C5A059</span>
              </div>
              <p className="text-xs text-slate-500">Accent. Premium, restrained, non-metallic.</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-paper border border-slate-200 rounded-sm shadow-sm"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-navy">Legal Paper</span>
                <span className="font-mono text-xs text-slate-500">#F5F5F0</span>
              </div>
              <p className="text-xs text-slate-500">Surface. Warm, textured, "heavy stock".</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 bg-slate-800 rounded-sm shadow-sm"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-navy">Charcoal</span>
                <span className="font-mono text-xs text-slate-500">#1E293B</span>
              </div>
              <p className="text-xs text-slate-500">Text. High contrast without harsh black.</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl border-b border-navy/10 pb-2">02. Typography</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-slate-400 mb-4">Headings (Playfair Display)</p>
              <div className="space-y-6">
                <div>
                  <h1 className="text-6xl">Appellate Law</h1>
                  <span className="text-xs font-mono text-slate-400">H1 / 6xl / Semibold</span>
                </div>
                <div>
                  <h2 className="text-4xl">The Record Speaks</h2>
                  <span className="text-xs font-mono text-slate-400">H2 / 4xl / Semibold</span>
                </div>
                <div>
                  <h3 className="text-2xl italic text-gold">"Disputes over documents."</h3>
                  <span className="text-xs font-mono text-slate-400">H3 / 2xl / Italic Accent</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-slate-400 mb-4">Body (Inter)</p>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-slate-700">
                  Most clients call an appellate attorney after a shock. The verdict came back wrong. The judge made a ruling that gutted your case. The trial didn't end the dispute; it just shifted the battlefield.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  This is body text set in Inter. It is clean, invisible, and highly legible. We use generous line-height (1.6) to evoke the feeling of a well-spaced legal brief.
                </p>
                <p className="text-xs font-bold text-navy uppercase tracking-widest">
                  Button Text Style
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UI Components */}
        <section className="space-y-6">
          <h2 className="text-2xl border-b border-navy/10 pb-2">03. Interface Elements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg">Buttons</h3>
              <div className="flex gap-4 items-center">
                <button className="bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors rounded-none">
                  Primary Action
                </button>
                <button className="border border-navy text-navy px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-navy hover:text-white transition-colors rounded-none">
                  Secondary Action
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">Note: Sharp corners (0px radius) to emphasize precision and "document" feel.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg">Cards / Content</h3>
              <div className="bg-white border border-slate-200 p-6 shadow-sm max-w-sm">
                <span className="text-gold text-xs font-sans font-bold uppercase tracking-widest block mb-2">Practice Area</span>
                <h4 className="text-xl mb-3">Breach of Contract</h4>
                <p className="text-sm text-slate-600 mb-4">
                  When a written agreement stops being honored, we enforce the terms. Not fairness, but the document.
                </p>
                <a href="#" className="text-navy text-sm font-semibold border-b border-gold pb-0.5 hover:text-gold transition-colors">Read More</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
