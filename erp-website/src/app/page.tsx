import AboutSection from "@/components/custom/about-section";
import FeaturesSection from "@/components/custom/feature-section";
import Footer from "@/components/custom/footer";
import IntroSection from "@/components/custom/intro-section";
import Navbar from "@/components/custom/navbar";
import ServicesSection from "@/components/custom/services-section";
import WhatsAppBubble from "@/components/custom/whatsapp-bubble";

export default function Home() {
  return (
    <>
    {/* test */}
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <Footer />
      <WhatsAppBubble />
    </>
  );
}