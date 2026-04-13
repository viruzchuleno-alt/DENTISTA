import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
