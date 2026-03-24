import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";
import  AuthPage  from "../../../components/authpage";

export default function ServicesPageRoute() {
  return (
    <div className="min-h-screen bg-[#E5E1DE]">
      <Navigation />
      
      {/* Changed pt-32 to pt-20 to pull the content up */}
      <main> 
        <div className="max-w-[1920px] mx-auto">
          {/* If ServicesContent also has padding inside it, 
              you might even want to use pt-0 here */}
          <AuthPage />
        </div>
      </main>

      <Footer />
    </div>
  );
}