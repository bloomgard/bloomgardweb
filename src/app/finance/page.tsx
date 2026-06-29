import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: 'Bloomgard Finance',
  description: 'AI fintech enterprise solutions for global banking and finance automation.',
  keywords: ['AI fintech enterprise solutions', 'financial erp', 'banking automation'],
};

export default function FinancePlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Finance erp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI fintech enterprise solutions and financial erp.",
    "provider": {
      "@type": "Organization",
      "name": "Bloomgard Corporation"
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 pb-20">
      <JsonLd data={softwareSchema} />
      
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <span className="font-extrabold text-3xl tracking-tighter text-black">Bloomgard.</span>
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
              <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 05</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Bloomgard Finance Plan</h1>
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Our plan for the Finance division is to use AI to make institutional banking faster, safer, and entirely automated.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Global banks process millions of transactions every single day. Human oversight is fundamentally incapable of catching highly sophisticated fraud or managing compliance at this scale. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are building the definitive financial erp. Our AI fintech enterprise solutions act as an impenetrable digital security guard, analyzing transactions instantly to halt fraud, optimize trading algorithms, and drastically reduce banking overhead.
            </p>
          </div>
          <div className="relative h-[600px] w-full bg-white border border-gray-200 shadow-xl p-4">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200" alt="Stock market ticker data" fill className="object-cover grayscale opacity-90" />
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
            <h3 className="text-xl font-bold mb-4">Automated Fraud Detection</h3>
            <p className="text-slate-600 leading-relaxed">Deep learning models that analyze user behavioral biometrics and transaction history in real-time to block unauthorized transfers.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Algorithmic Compliance</h3>
            <p className="text-slate-600 leading-relaxed">Software that automatically audits financial flows against ever-changing international regulatory laws, preventing massive fines.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">High-Frequency Trading AI</h3>
            <p className="text-slate-600 leading-relaxed">Predictive models that digest global news sentiment and market data to execute micro-second institutional trades.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
