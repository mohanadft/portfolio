import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { LINKEDIN_URL } from "@/lib/links";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const SITE_URL = "https://mohanadfteha.me";

const DESCRIPTION =
  "Software engineer working on the half of the product you only notice when it breaks — APIs, queues, deploy pipelines. Three years, mostly Node and TypeScript, lately Rust.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohanad Fteiha | Software Engineer",
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Mohanad Fteiha | Software Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Mohanad Fteiha",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohanad Fteiha | Software Engineer",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohanad Fteiha",
              url: SITE_URL,
              jobTitle: "Software Engineer",
              knowsAbout: [
                "Node.js",
                "TypeScript",
                "Rust",
                "AWS",
                "Kubernetes",
                "Serverless Architecture",
                "Backend Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Al Azhar University, Gaza",
              },
              sameAs: [
                "https://github.com/mohanadft",
                LINKEDIN_URL,
              ],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
