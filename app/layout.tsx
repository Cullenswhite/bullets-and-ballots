import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Enhance } from "@/components/enhance";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ENHANCE_SCRIPT } from "@/lib/motion";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cantraldesign.design"),
  title: "Bullets and Ballots. | Sam Drake-Weiss",
  description:
    "Sam Drake-Weiss and Bullets and Ballots. Our main goal is to bring back personal freedom.",
  openGraph: {
    title: "Bullets and Ballots.",
    description:
      "Sam Drake-Weiss and Bullets and Ballots. Our main goal is to bring back personal freedom.",
    images: ["/party-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: ENHANCE_SCRIPT }} />
        <SiteHeader />
        <Enhance />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
