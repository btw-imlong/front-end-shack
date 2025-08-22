import HeroSection from "@/app/home/content/hero-section";
import Category from "@/app/home/content/category";
import Review from "@/app/home/content/review";
import VisitUs from "@/app/home/content/visit";
import Partner from "@/app/home/content/partner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Category />
      <Review />
      <VisitUs />
      <Partner />
    </>
  );
}
