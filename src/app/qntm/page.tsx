import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-700 font-bold mb-10 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Bloomgard QNTM Plan</h1>
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
          Our plan for the QNTM division is to bring quantum computers to the cloud.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Normal computers are great, but they are too slow for really hard problems, like inventing new medicines or predicting the stock market perfectly. Quantum computers are much faster.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          We are building the infrastructure for cloud quantum computing in India. In the future, companies will be able to rent our quantum computers over the internet, allowing them to solve massive problems in seconds instead of years, perfectly complementing our AI fintech enterprise solutions.
        </p>
      </div>
    </div>
  );
}
