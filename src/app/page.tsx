import { Navigation } from "../../components/navigation";
import { Hero } from "../../components/hero";
import { CoreTechSection } from "../../components/CoreTechSection";
import { Steps } from "../../components/steps";
import { Benefits } from "../../components/benefits";
import { Testimonial } from "../../components/testimonial";
import { Pricing } from "../../components/pricing";
import { Comparison } from "../../components/comparison";
import { Guarantee } from "../../components/guarantee";
import { FinalCTA } from "../../components/FinalCTA";
import { Footer } from "../../components/footer";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#E5E1DE] selection:bg-[#C5A27D] selection:text-[#1A1A1A]">
      <Navigation />
      <Hero/>
      <CoreTechSection/>
      <Steps/>
      <Benefits/>
      <Testimonial/>
      <Pricing/>
      <Comparison/>
      <Guarantee/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}