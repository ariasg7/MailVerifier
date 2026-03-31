import { Navigation } from "../../../components/navigation";
import { FAQ } from "../../../components/faq";
import { Footer } from "../../../components/footer";

export default function FAQPage() {
  return (
    <main className="bg-[#0A192F]">
      <Navigation />
      
      {/* Adding a spacer for the fixed navbar */}
      <div className="h-20" /> 
      
      <FAQ />
      
      <Footer />
    </main>
  );
}