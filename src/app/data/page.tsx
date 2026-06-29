import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-700 font-bold mb-10 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Bloomgard Data Plan</h1>
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
          Our plan for the Data division is to make data centers smarter and faster.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          The internet runs on massive buildings filled with servers. These servers get very hot and use a lot of power. If they go offline, websites crash. We solve this with the Bloomgard Data erp for comprehensive data centre infrastructure management.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          We are creating software that manages these servers automatically through thermal physics management. Our tools control the cooling systems to save electricity and move internet traffic around so no single server gets too busy. This ensures server uptime automation for the companies that rely on us.
        </p>
      </div>
    </div>
  );
}
