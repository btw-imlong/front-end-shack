// Imports
import type { Metadata } from "next";
import "./globals.css";

// Components
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Context
import { LanguageProvider } from "@/context/LanguageContext";

// Google Fonts
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"], // normal and bold
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // optional variations
});

export const metadata: Metadata = {
  title: "Shack Collective | Phnom Penh Concept Store",
  description:
    "Ethical, local, and handmade treasures — all under one roof at Shack Collective in Phnom Penh.",
  keywords: ["Cambodia", "Handmade", "Ethical", "Crafts", "Phnom Penh"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
