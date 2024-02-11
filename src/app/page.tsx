import FAQSection from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQSection />

      {/* <TestimonialsSection />
      <FAQSection />
      <GetApp /> */}
    </>
  );
}
