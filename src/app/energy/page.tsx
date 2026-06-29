import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-slate-900 py-20 px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-700 font-bold mb-10 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Bloomgard Energy Plan</h1>
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
          Our plan for the Energy division is to use AI to keep the world&apos;s power on.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Managing a power plant is incredibly complex. If something breaks, thousands of people lose electricity. We are building the Bloomgard Energy erp that monitors everything in the plant in real-time.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Our predictive maintenance software predicts when a machine will break so workers can fix it early. In the future, we will help connect solar and wind power to the main grid safely with our grid stability AI, ensuring clean energy is never wasted.
        </p>
      </div>
    </div>
  );
}
