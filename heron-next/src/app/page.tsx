import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProblemSection from "@/components/ProblemSection";
import MapSection from "@/components/MapSection";
import PlatformSection from "@/components/PlatformSection";
import WhyUsSection from "@/components/WhyUsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import InteractiveEffects from "@/components/InteractiveEffects";

export default function HomePage() {
  return (
    <div className="body-inner">
      <InteractiveEffects />
      <div className="common">
        <Header />
        <main className="main">
          <HeroSection />
          <IntroSection />
          <ProblemSection />
          <MapSection />
          <PlatformSection />
          <WhyUsSection />
          <UseCasesSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
