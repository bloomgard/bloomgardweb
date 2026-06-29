import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: 'Bloomgard QNTM',
  description: 'Building cloud quantum computing infrastructure in India alongside AI fintech enterprise solutions.',
  keywords: ['Cloud quantum computing India', 'AI fintech enterprise solutions'],
};

export default function QntmPlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard QNTM erp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Cloud quantum computing India and AI fintech enterprise solutions.",
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
              <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 04</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Bloomgard QNTM Plan</h1>
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Our plan for the QNTM division is to bring commercial quantum computing to the cloud.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Classical computers are reaching their physical limits. For highly complex tasks—like simulating molecular structures for new drugs, or optimizing global supply chains—they are simply too slow. Quantum computers solve these problems in seconds.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are establishing the infrastructure for cloud quantum computing in India. By offering QaaS (Quantum as a Service), we will allow major corporations to rent supercomputing power directly over the internet, supercharging our AI fintech enterprise solutions.
            </p>
          </div>
          <div className="relative h-[600px] w-full bg-white border border-gray-200 shadow-xl p-4">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" alt="Quantum computer hardware" fill className="object-cover grayscale opacity-90" />
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
            <h3 className="text-xl font-bold mb-4">Cloud Integration</h3>
            <p className="text-slate-600 leading-relaxed">Developing API layers that allow standard enterprise applications to offload complex algorithms to quantum processors seamlessly.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Fintech Acceleration</h3>
            <p className="text-slate-600 leading-relaxed">Using quantum algorithms to run millions of Monte Carlo simulations for institutional portfolio optimization in seconds.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Cryogenic Infrastructure</h3>
            <p className="text-slate-600 leading-relaxed">Building the highly specialized, super-cooled physical infrastructure required to keep qubits stable in Indian datacenters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
