import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Enterprise',
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

  return <DivisionPage slug="enterprise" schema={softwareSchema} />;
}
