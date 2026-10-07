export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://novaristechus.com/#website",
    url: "https://novaristechus.com",
    name: "Novaris Technologies",
    publisher: {
      "@id": "https://novaristechus.com/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}