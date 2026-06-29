import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-700 font-bold mb-10 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Bloomgard Enterprise Plan</h1>
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
          Our plan for the Enterprise division is simple: build the best AI tools for large companies.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Right now, big companies waste a lot of time on manual tasks. We are building software that acts like a smart assistant. It can read emails, find new customers, and help managers organize their teams. 
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          In the future, we want every major company to run on Bloomgard Enterprise erp. Our AI will automatically fix problems before they happen and help executives make better decisions faster.
        </p>
      </div>
    </div>
  );
}
