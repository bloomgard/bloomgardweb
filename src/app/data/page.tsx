import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Data',
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

  return <DivisionPage slug="data" schema={softwareSchema} />;
}
