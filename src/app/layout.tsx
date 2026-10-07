import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novaris Technologies — Software, Automation & AI Engineering",
  description:
    "Novaris Technologies builds software, intelligent automation, AI integrations, and technology infrastructure engineered around the way your business operates.",
  authors: [{ name: "Novaris Technologies" }],
  openGraph: {
    siteName: "Novaris Technologies",
    title: "Novaris Technologies",
    description:
      "We build intelligent systems for the way modern businesses operate.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novaris Technologies",
  description:
    "Software, automation, AI integration, and technology consulting company.",
  slogan:
    "We build intelligent systems for the way modern businesses operate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}