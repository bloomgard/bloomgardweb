import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'QNTM',
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

  return <DivisionPage slug="qntm" schema={softwareSchema} />;
}
