import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore our collection of unique handmade products.
        </p>
        <Button asChild>
          <Link
            href="/products"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
          >
            Shop Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
