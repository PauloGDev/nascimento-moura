import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(resolve(projectRoot, "landing.data.json"), "utf8"));
const outputPath = resolve(projectRoot, "dist", "index.html");
const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const serviceItems = data.services
  .map((service) => "<article><h3>" + escapeHtml(service.title) + "</h3><p>" + escapeHtml(service.description) + "</p></article>")
  .join("");
const processItems = data.process
  .map((step, index) => "<li><strong>" + String(index + 1).padStart(2, "0") + " · " + escapeHtml(step.title) + "</strong><p>" + escapeHtml(step.description) + "</p></li>")
  .join("");
const faqItems = data.faq
  .map((item) => "<details><summary>" + escapeHtml(item.question) + "</summary><p>" + escapeHtml(item.answer) + "</p></details>")
  .join("");

const staticHtml = [
  '<main data-prerendered="true">',
  '<section id="inicio"><p>' + escapeHtml(data.hero.eyebrow) + '</p><h1>' + escapeHtml(data.hero.title) + '</h1><p>' + escapeHtml(data.hero.description) + '</p></section>',
  '<section id="atuacao"><h2>Análise jurídica para diferentes tipos de crédito</h2>' + serviceItems + '</section>',
  '<section id="processo"><h2>Do primeiro contato à decisão, você sabe o que acontece</h2><ol>' + processItems + '</ol></section>',
  '<section id="escritorio"><h2>' + escapeHtml(data.professional.name) + '</h2><p>' + escapeHtml(data.professional.oab) + '</p><p>' + escapeHtml(data.professional.biography) + '</p></section>',
  '<section id="faq"><h2>Dúvidas frequentes</h2>' + faqItems + '</section>',
  '<section id="contato"><h2>Entenda o seu contrato antes de tomar a próxima decisão.</h2><p>' + escapeHtml(data.location.regions) + '</p></section>',
  '</main>',
].join("");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: data.project.displayName,
    description: data.hero.description,
    telephone: "+" + data.contact.whatsapp,
    email: data.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Mato Grosso, 2372, Centro",
      addressLocality: "Sorriso",
      addressRegion: "MT",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: [data.contact.instagram],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.professional.name,
    jobTitle: "Advogado",
    description: data.professional.oab + " · atuação em Direito Bancário",
    worksFor: {
      "@type": "LegalService",
      name: data.project.displayName,
    },
    knowsAbout: ["Direito Bancário", "Contratos bancários", "Crédito empresarial"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

let html = readFileSync(outputPath, "utf8");
html = html.replace('<div id="root"></div>', '<div id="root">' + staticHtml + '</div>');
html = html.replace("</head>", '<script type="application/ld+json">' + JSON.stringify(jsonLd) + "</script></head>");
writeFileSync(outputPath, html, "utf8");
