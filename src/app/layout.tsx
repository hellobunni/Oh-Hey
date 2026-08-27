import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Fraunces,
  Geist,
  Geist_Mono,
  Quicksand,
  Silkscreen,
} from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/layout/AppChrome";

/** Geist stays on next/font — not in the Google Fonts @import (Fraunces/Quicksand/Silkscreen). */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "oh-hey-lynae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${quicksand.variable} ${silkscreen.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Reads localStorage before first paint to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('ohl-theme')||'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;})()`,
          }}
        />
      </head>
      <body
        className="antialiased wrap-anywhere m-0 bg-paper text-ink font-sans"
        suppressHydrationWarning
      >
        <AppChrome>{children}</AppChrome>
        <Analytics />
      </body>
    </html>
  );
}
