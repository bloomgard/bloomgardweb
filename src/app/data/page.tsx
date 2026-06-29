import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: 'Bloomgard Data',
  description: 'Data centre infrastructure management erp focusing on thermal physics management and server uptime automation.',
  keywords: ['Data centre infrastructure management', 'thermal physics management', 'server uptime automation'],
};

export default function DataPlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Data erp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Data centre infrastructure management erp, automating server uptime and thermal physics.",
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
              <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 03</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Bloomgard Data Plan</h1>
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Our plan for the Data division is to make massive data centers smarter, cooler, and practically invincible.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The modern internet relies on enormous warehouses filled with servers. These servers generate extreme heat and consume vast amounts of electricity. When they fail, global commerce halts. We plan to solve this with the Bloomgard Data erp.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We plan to build software that automates thermal physics management. In the future, our AI will continuously tweak liquid cooling valves and redirect server traffic instantly to prevent overheating, ensuring absolute server uptime automation for our institutional clients.
            </p>
          </div>
          <div className="relative h-[600px] w-full bg-white border border-gray-200 shadow-xl p-4">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200" alt="Server room with neon lights" fill className="object-cover" />
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
            <h3 className="text-xl font-bold mb-4">Future Thermal Physics Automation</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build dynamic HVAC and liquid cooling control based on real-time CPU temperatures across thousands of racks.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Future Uptime Insurance</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build sub-millisecond failover routing protocols that detect hardware faults and seamlessly transfer workloads.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Future Energy Optimization</h3>
            <p className="text-slate-600 leading-relaxed">We plan to build algorithmic workload scheduling that aligns heavy computation with periods of cheap, renewable energy availability.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
