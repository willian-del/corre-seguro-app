import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhoWeServe from "@/components/WhoWeServe";
import ForWho from "@/components/ForWho";
import Problems from "@/components/Problems";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <WhySection />
        <WhoWeServe />
        <ForWho />
        <Problems />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Index;
