import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: 'Bloomgard Enterprise',
  description: 'AI native erp for enterprise, providing automated CRM and scalable scheduling systems for massive corporate operations.',
  keywords: ['AI native erp for enterprise', 'automated CRM', 'scalable scheduling systems'],
};

export default function EnterprisePlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Enterprise erp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI native erp for enterprise, automated CRM, and scalable scheduling systems.",
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
              <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 01</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Bloomgard Enterprise Plan</h1>
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Our plan for the Enterprise division is simple: build the absolute best AI tools for large companies, centered around our flagship AI CRM.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Right now, big companies waste millions of hours on manual tasks. We are building an ecosystem of software that acts like a highly intelligent assistant. It reads emails, qualifies leads, and organizes global teams autonomously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://cma.bloomgard.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                Access AI CRM <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-white border border-gray-200 shadow-xl p-4">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" alt="Corporate team strategy meeting" fill className="object-cover grayscale opacity-90" />
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
            <h3 className="text-xl font-bold mb-4">AI CRM Integration</h3>
            <p className="text-slate-600 leading-relaxed">Our advanced AI CRM automatically logs interactions, scores leads based on sentiment analysis, and predicts closing probabilities.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Automated Scheduling</h3>
            <p className="text-slate-600 leading-relaxed">Cross-timezone scheduling handled entirely by AI agents, freeing up administrative bottlenecks across massive corporate structures.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-700 mb-6" />
            <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-slate-600 leading-relaxed">Real-time dashboards that forecast quarterly revenue, employee turnover, and supply chain delays before they happen.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
