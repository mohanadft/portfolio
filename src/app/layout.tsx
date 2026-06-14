import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mohanadfteha.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohanad Fteha | Software Engineer",
  description:
    "Backend engineer specializing in serverless architectures, APIs, and infrastructure. Building scalable systems with Node.js, TypeScript, Rust, and AWS.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Mohanad Fteha | Software Engineer",
    description:
      "Backend engineer building scalable systems with Node.js, TypeScript, Rust, and AWS.",
    url: SITE_URL,
    siteName: "Mohanad Fteha",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohanad Fteha | Software Engineer",
    description:
      "Backend engineer building scalable systems with Node.js, TypeScript, Rust, and AWS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohanad Fteha",
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
                "https://www.linkedin.com/in/mohanadft",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#about" className="skip-link">
          Skip to content
        </a>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
