import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientTicker from "@/components/ClientTicker";
import ProblemMatrix from "@/components/ProblemMatrix";
import PlatformShowcase from "@/components/PlatformShowcase";
import WhyUsSection from "@/components/WhyUsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--cl-bg, #FAF8F5)", color: "#0c161e", overflowX: "hidden" }}>
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section with Live Architectural Datum Scanner */}
      <HeroSection />

      {/* 3. Partner Firm Ticker */}
      <ClientTicker />

      {/* 4. 4-Column Problem Bottlenecks Grid */}
      <ProblemMatrix />

      {/* 5. Platform Suite: Chat Widget & Dashboard CAD Preview */}
      <PlatformShowcase />

      {/* 6. Why Heron: 4-Phase Engineering Workflow with Code Checks */}
      <WhyUsSection />

      {/* 7. Use Cases: Role-Specific Accordion */}
      <UseCasesSection />

      {/* 8. Call To Action Banner */}
      <CtaBanner />

      {/* 9. Architectural Footer */}
      <Footer />
    </main>
  );
}
