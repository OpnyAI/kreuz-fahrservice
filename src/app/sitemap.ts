import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.kreuz-fahrservice.de/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://www.kreuz-fahrservice.de/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: "https://www.kreuz-fahrservice.de/datenschutz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];
}
