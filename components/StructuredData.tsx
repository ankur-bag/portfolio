import React from 'react';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.ankurbag.tech/#person",
        name: "Ankur Bag",
        url: "https://www.ankurbag.tech",
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer specializing in MERN stack, AI integrations, and GenAI-powered applications. Builder of scalable web platforms and AI tools.",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "RCC Institute of Information Technology (MAKAUT)",
        },
        worksFor: {
          "@type": "Organization",
          name: "Freelance / Resourcio Pvt Ltd",
        },
        sameAs: [
          "https://github.com/ankur-bag",
          "https://www.linkedin.com/in/ankur-bag-017664314/",
          "https://twitter.com/ankur_bag"
        ],
        knowsAbout: [
          "MERN Stack",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Full Stack Development",
          "Artificial Intelligence",
          "GenAI",
          "Prompt Engineering",
          "Web Development",
          "Scalable Systems",
          "Frontend Engineering",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressCountry: "IN",
        },
        award: [
          "Winner — Double Slash 4.0 (Jadavpur University)",
          "Winner — ShowcaseX x Techsprint (Hack2Skill)",
          "Winner — Hello World Hacks (GDG RCCIIT)",
          "Web Associate — GDG on Campus RCCIIT",
          "Rajya Puraskar Scout Award",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.ankurbag.tech/#service",
        name: "Ankur Bag — Freelance Developer",
        provider: {
          "@id": "https://www.ankurbag.tech/#person",
        },
        serviceType: [
          "Full Stack Web Development",
          "MERN Stack Applications",
          "AI & GenAI Integration",
          "Frontend Development",
          "Web App Development",
          "Portfolio & SaaS Development",
        ],
        areaServed: "Worldwide",
        description:
          "Providing full stack development and AI-powered solutions including modern web applications, scalable platforms, and intelligent user interfaces.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ankurbag.tech/#website",
        url: "https://www.ankurbag.tech",
        name: "Ankur Bag Portfolio",
        author: {
          "@id": "https://www.ankurbag.tech/#person",
        },
        description:
          "Portfolio of Ankur Bag showcasing AI-powered projects, web applications, and full stack development work.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
