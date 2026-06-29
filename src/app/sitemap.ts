import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bloomgard.co';
  
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/enterprise`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/energy`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/data`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/qntm`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/finance`, lastModified: new Date(), priority: 0.8 },
  ];
}
