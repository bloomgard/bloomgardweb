import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-700 font-bold mb-10 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Bloomgard Finance Plan</h1>
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
          Our plan for the Finance division is to use AI to make banking faster and safer.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Banks handle millions of transactions every day. It is hard for humans to check every single one to make sure no money is stolen.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          We are building smart software through our financial erp that acts like a security guard for money. Our AI fintech enterprise solutions watch all transactions instantly, stop fraud, and help financial companies run much more efficiently.
        </p>
      </div>
    </div>
  );
}
