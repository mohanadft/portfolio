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

export const metadata: Metadata = {
  title: "Mohanad Fteha | Software Engineer",
  description: "Software Engineer specializing in backend development, serverless architectures, and infrastructure. Building scalable systems with Node.js, TypeScript, Rust, and AWS.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohanad Fteha | Software Engineer",
    description: "Backend engineer building scalable systems with Node.js, TypeScript, Rust, and AWS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mohanad Fteha | Software Engineer",
    description: "Backend engineer building scalable systems with Node.js, TypeScript, Rust, and AWS.",
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
