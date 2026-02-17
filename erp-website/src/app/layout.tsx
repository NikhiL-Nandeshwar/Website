import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexspiretechnologies.in"),
  title: {
    default: "Nexspire Technologies | Software, Websites and Growth Solutions",
    template: "%s | Nexspire Technologies",
  },
  description:
    "Nexspire Technologies builds society and business software, premium websites, digital business cards, and social media growth bundles.",
  openGraph: {
    title: "Nexspire Technologies",
    description:
      "Software products, websites, digital cards, and social media bundles for modern businesses.",
    url: "https://www.nexspiretechnologies.in",
    siteName: "Nexspire Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

