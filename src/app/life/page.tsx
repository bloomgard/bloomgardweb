import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Life',
  description: 'AI for healthcare and life sciences: clinical intelligence, hospital operations and drug discovery.',
  keywords: ['AI healthcare India', 'clinical AI', 'AI drug discovery'],
};

export default function LifePlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Life",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "description": "Clinical intelligence, hospital operations and AI drug discovery.",
    "provider": {
      "@type": "Organization",
      "name": "Bloomgard Corporation"
    }
  };

  return <DivisionPage slug="life" schema={softwareSchema} />;
}
