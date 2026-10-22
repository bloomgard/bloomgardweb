import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Energy',
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

  return <DivisionPage slug="energy" schema={softwareSchema} />;
}
