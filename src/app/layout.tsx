import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hey Oko Fitness - Personal Training & Wellness",
  description: "Professional personal training and wellness services. Transform your fitness journey with expert guidance and personalized programs.",
  keywords: ["personal training", "fitness", "wellness", "therapy", "health"],
  authors: [{ name: "Hey Oko Fitness" }],
  creator: "Hey Oko Fitness",
  publisher: "Hey Oko Fitness",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hey Oko Fitness - Personal Training & Wellness",
    description: "Professional personal training and wellness services. Transform your fitness journey with expert guidance and personalized programs.",
    siteName: "Hey Oko Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Oko Fitness - Personal Training & Wellness",
    description: "Professional personal training and wellness services. Transform your fitness journey with expert guidance and personalized programs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable} data-brand-mode="wellness">
      <body className="font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}