"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage(); // ✅ use translations

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t("heroTitle")
            .split("\n")
            .map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8">{t("heroSubtitle")}</p>

        <Button variant="default">
          <Link href="/products">{t("shopNow")}</Link>
        </Button>
      </div>
    </section>
  );
}
