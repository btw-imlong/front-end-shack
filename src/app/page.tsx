import HeroSection from "@/app/home/content/hero-section";
import Category from "@/app/home/content/category";
import Review from "@/app/home/content/review";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Category />
      <Review />
      <Footer />
    </>
  );
}
