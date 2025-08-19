import HeroSection from "@/app/home/content/hero-section";
import Category from "@/app/home/content/category";
import Review from "@/app/home/content/review";
import Contact from "@/app/contact/page";
import BlogProduct from "@/app/blog-product/page";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Category />
      <Review />
      <Contact />
      <BlogProduct />
    </>
  );
}
