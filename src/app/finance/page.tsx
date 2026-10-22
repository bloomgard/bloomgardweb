import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Finance',
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

  return <DivisionPage slug="finance" schema={softwareSchema} />;
}
