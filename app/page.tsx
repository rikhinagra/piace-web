import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import IntegrateSection from "@/components/IntegrateSection";
import FeatureSection from "@/components/FeatureSection";
import MigrationBand from "@/components/MigrationBand";
import DemoSection from "@/components/DemoSection";
import Faq from "@/components/Faq";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <IntegrateSection />
        <FeatureSection />
        <MigrationBand />
        <DemoSection />
        <Faq />
        <BookSection />
        <div className="page-end-glow" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
