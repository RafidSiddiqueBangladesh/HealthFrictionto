import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FrictionFrameworkSection from "@/components/FrictionFrameworkSection";
import RolesSection from "@/components/RolesSection";
import CTASection from "@/components/CTASection";
import FloatingDownloadButton from "@/components/FloatingDownloadButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FrictionFrameworkSection />
      <RolesSection />
      <CTASection />
      <FloatingDownloadButton />
    </div>
  );
};

export default Index;
