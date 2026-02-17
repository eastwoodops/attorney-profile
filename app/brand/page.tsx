export default function BrandPage() {
  return (
    <div className="min-h-screen bg-paper p-8 md:p-16">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header */}
        <header className="border-b border-navy/10 pb-12">
          <h4 className="mb-6">Internal Review: Iteration 1.1</h4>
          <h1 className="mb-6">Typography & Hierarchy</h1>
          <p className="prose-legal max-w-3xl">
            Refining the voice of authority. We have shifted the body typeface to 
            <span className="font-semibold text-navy"> Source Sans 3 </span> 
            to avoid "startup genericism" while maintaining high legibility. 
            The scale is tightened to a Major Third ratio for harmonious authority.
          </p>
        </header>

        {/* Typography Showcase */}
        <section className="grid md:grid-cols-12 gap-12 border-b border-navy/10 pb-24">
          <div className="md:col-span-4">
            <h4 className="mb-4 text-slate-400">The Verdict (Headings)</h4>
            <p className="text-sm text-slate-600 mb-8">
              Playfair Display. High contrast. Used for decisive statements.
            </p>
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H1 / 6xl</span>
                <h1>Appellate Law</h1>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H2 / 4xl</span>
                <h2>The Record Speaks</h2>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">H3 / 2xl</span>
                <h3>Disputes over documents</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <h4 className="mb-4 text-slate-400">The Evidence (Body)</h4>
            <p className="text-sm text-slate-600 mb-8">
              Source Sans 3. Humanist, open, legible. Set with loose leading (1.7) for cognitive ease.
            </p>
            
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Body / Large (Intro)</span>
                <p className="text-xl leading-relaxed text-slate-700">
                  Most clients call an appellate attorney after a shock. The verdict came back wrong. 
                  The judge made a ruling that gutted your case. The trial didn't end the dispute; 
                  it just shifted the battlefield.
                </p>
              </div>
              
              <div className="max-w-prose">
                <span className="text-xs font-mono text-slate-400 block mb-2">Body / Base (Content)</span>
                <p className="text-base text-slate-600 mb-4">
                  This is the standard reading experience. We use Source Sans 3 because it has "humanist" qualities—
                  slight calligraphic variations in the strokes—which makes it feel more like professional print 
                  and less like a software interface.
                </p>
                <p className="text-base text-slate-600">
                  By strictly controlling line length (max 75 chars) and increasing vertical rhythm, 
                  we signal that this content is valuable and should be read slowly, not scanned.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Examples */}
        <section className="space-y-12">
           <div className="flex justify-between items-end border-b border-navy/10 pb-4">
             <h2>Contextual Application</h2>
             <span className="text-sm text-slate-400 font-mono">UI_Component_01</span>
           </div>

           <div className="grid md:grid-cols-2 gap-16">
             {/* Card Example */}
             <div className="bg-white p-8 border-l-2 border-gold shadow-sm">
               <h4>Practice Area</h4>
               <h3 className="mt-4 mb-4">Breach of Contract</h3>
               <p className="text-slate-600 mb-6 text-sm leading-7">
                 When a written agreement stops being honored, we enforce the terms. 
                 We do not litigate "fairness"; we litigate the document.
               </p>
               <span className="text-navy text-sm font-semibold border-b border-gold pb-1">
                 View Capability
               </span>
             </div>

             {/* Quote Example */}
             <div className="flex flex-col justify-center">
               <p className="font-serif text-3xl text-navy italic leading-snug">
                 "The appeal is not a re-do of the trial. It is a precise surgical intervention on the record."
               </p>
               <div className="mt-6 flex items-center gap-4">
                 <div className="h-px w-12 bg-gold"></div>
                 <span className="text-sm font-sans font-medium text-slate-500 uppercase tracking-widest">
                   Alderman Law Philosophy
                 </span>
               </div>
             </div>
           </div>
        </section>

      </div>
    </div>
  );
}
