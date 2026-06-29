import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: 'Bloomgard Energy',
  description: 'Energy plant management erp featuring grid stability AI and predictive maintenance software.',
  keywords: ['Energy plant management erp', 'grid stability AI', 'predictive maintenance software'],
};

export default function EnergyPlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Energy erp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Energy plant management erp with grid stability AI and predictive maintenance.",
    "provider": {
      "@type": "Organization",
      "name": "Bloomgard Corporation"
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 pb-20">
      <JsonLd data={softwareSchema} />
      
      {/* Header */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <span className="font-extrabold text-4xl tracking-tighter text-black">Bloomgard.</span>
          <Link href="/" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 02</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Bloomgard Energy Plan</h1>
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Our plan for the Energy division is to use AI to keep the world&apos;s power grids stable and perfectly optimized, with a massive focus on accelerating the global shift to renewable energy.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Managing a modern power plant is incredibly complex. If a critical turbine fails, millions lose electricity. We plan to build the Bloomgard Energy erp to monitor millions of data points across massive renewable energy infrastructures in real-time.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              In the future, our predictive maintenance software will alert engineers weeks before a machine breaks. We plan to ensure absolute grid stability and pave the way for hyper-efficient solar, wind, and hydro integration.
            </p>
          </div>
          <div className="relative h-[600px] w-full bg-white border border-gray-200 shadow-xl p-4">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=1200" alt="Wind turbines at sunset" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-extrabold mb-12 text-center">Core Implementation Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Future Predictive Maintenance</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build acoustic and thermal sensors analyzed by AI to detect micro-fractures in wind turbines before they cause catastrophic failure.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Future Grid Load Balancing</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build algorithmic distribution of renewable energy loads across cities to prevent blackouts during peak usage hours like heatwaves.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Renewable AI Integration</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build smart routing protocols that automatically store excess solar and wind energy in vast battery banks for later dispatch.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
