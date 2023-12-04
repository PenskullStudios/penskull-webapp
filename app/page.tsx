import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import HeroSection from "@/app/components/landing-page/HeroSection";
import ProductSection from "@/app/components/landing-page/ProductSection";
import InternetPlans from "@/app/components/landing-page/InternetPlans";
import Bundles from "@/app/components/landing-page/Bundles";
import Accessories from "@/app/components/landing-page/Accessories";
import Faqs from "@/app/components/landing-page/Faqs";
import AboutUs from "@/app/components/landing-page/AboutUs";
import ContactUs from "@/app/components/landing-page/ContactUs";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="bg-gradient-to-r from-custom-purple to-custom-pink h-5"></div>
      <HeroSection />
      <ProductSection />
      <InternetPlans />
      <Bundles />
      <Accessories />
      <Faqs />
      <AboutUs />
      <ContactUs />
      <div className="h-14 bg-black"></div>
    </>
  );
}
