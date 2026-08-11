import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const paths = [
  "",
  "/about",
  "/trimming",
  "/animal-hospital",
  "/puppily-delica",
  "/memory-photo",
  "/shop",
  "/access",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
