import AboutSection from "@/components/custom/about-section";
import FeaturesSection from "@/components/custom/feature-section";
import Footer from "@/components/custom/footer";
import IntroSection from "@/components/custom/intro-section";
import Navbar from "@/components/custom/navbar";
import ServicesSection from "@/components/custom/services-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}