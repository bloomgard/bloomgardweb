import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: 'Education',
  description: 'AI tutoring and teaching tools built for every learner, in every language.',
  keywords: ['AI tutoring India', 'AI for teachers', 'adaptive learning'],
};

export default function EducationPlan() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bloomgard Education",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "AI tutoring, teacher co-pilot and skills platform.",
    "provider": {
      "@type": "Organization",
      "name": "Bloomgard Corporation"
    }
  };

  return <DivisionPage slug="education" schema={softwareSchema} />;
}
