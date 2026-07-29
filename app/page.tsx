import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarouselSection from "@/components/CarouselSection";
import ComparisonSection from "@/components/ComparisonSection";
import PainSection from "@/components/PainSection";
import TrustSection from "@/components/TrustSection";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><CarouselSection /></ScrollReveal>
        <ScrollReveal><ComparisonSection /></ScrollReveal>
        <ScrollReveal><PainSection /></ScrollReveal>
        <ScrollReveal><TrustSection /></ScrollReveal>
        <ScrollReveal><BookSection /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
