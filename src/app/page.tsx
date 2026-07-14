import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import CreativeSkills from "@/components/CreativeSkills";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <CreativeSkills />
      <GallerySection />
      <TrustSection />
      <Footer />
    </main>
  );
}
