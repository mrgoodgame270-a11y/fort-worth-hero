import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <StatsBar />
    <ServicesSection />
    <WhyUsSection />
    <GallerySection />
    <ReviewsSection />
    <BookingSection />
    <Footer />
    <AIChatbot />
  </>
);

export default Index;
