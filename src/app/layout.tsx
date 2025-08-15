import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global navigation */}
        <Navbar />
        {/* Optional: <NavigationMenu /> */}

        {/* Page content */}
        <main>{children}</main>

        {/* You could add a footer here */}
      </body>
    </html>
  );
}
