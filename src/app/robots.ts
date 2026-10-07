import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://novaristechus.com/sitemap.xml",
    host: "https://novaristechus.com",
  };
}