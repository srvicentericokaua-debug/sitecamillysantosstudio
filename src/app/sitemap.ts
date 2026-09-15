import type { MetadataRoute } from "next";

const routes = ["", "/quem-sou", "/servicos", "/resultados", "/contato"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://camillysantosstudio.com.br";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
