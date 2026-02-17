import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper p-4 text-center">
      <h1 className="text-4xl md:text-6xl text-navy mb-6">Alderman Law Firm</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-lg font-sans">
        Premium Brand Identity & Website Development
      </p>
      <Link 
        href="/brand" 
        className="bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors"
      >
        View Visual Identity System
      </Link>
    </div>
  );
}
