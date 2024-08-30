import ogImageSrc from "@images/social.png";
export const SITE = {
  title: "SunEnergyGreen",
  tagline: "Energía Solar de Alta Calidad",
  description: "SunEnergyGreen ofrece soluciones solares personalizadas y servicios expertos en energía renovable para reducir tus costos y mejorar la eficiencia energética de tu hogar. Descubre cómo puedes protegerte del alza de la luz con tecnología de vanguardia.",
  description_short: "Soluciones solares personalizadas para un futuro sostenible.",
  url: "https://sunenergygreen.cl",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Energía Solar y Soluciones Renovables`,
  description: "Ahorra en tus cuentas de luz con SunEnergyGreen. Ofrecemos soluciones solares de alta calidad y servicios personalizados en energía renovable. Únete a la revolución solar y mejora la eficiencia energética de tu hogar.",
  image: ogImageSrc,
};

