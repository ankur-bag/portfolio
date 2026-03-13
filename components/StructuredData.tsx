import React from 'react';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ankur Bag",
    "url": "https://www.ankurbag.tech",
    "jobTitle": "Full Stack Developer",
    "nationality": "Indian",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "RCC Institute of Information Technology"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Resourcio Pvt Ltd"
    },
    "knowsAbout": [
      "Next.js",
      "React",
      "Generative AI",
      "RAG Systems",
      "Full Stack Web Development",
      "Node.js",
      "Tailwind CSS"
    ],
    "sameAs": [
      "https://github.com/ankur-bag",
      "https://linkedin.com/in/ankur-bag",
      "https://twitter.com/ankur_bag"
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Ankur Bag Portfolio",
    "url": "https://www.ankurbag.tech",
    "author": {
      "@type": "Person",
      "name": "Ankur Bag"
    },
    "description": "Professional developer portfolio of Ankur Bag, showcasing projects in AI, GenAI, and Full Stack Development."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
