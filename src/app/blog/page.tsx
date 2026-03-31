import { Navigation } from "../../../components/navigation";
import { Blog } from "../../../components/blog";
import { Footer } from "../../../components/footer";

export default function BlogPage() {
  return (
    <main className="bg-[#0A192F] min-h-screen">
      {/* Navigation (Sticky by default in your component) */}
      <Navigation />

      {/* Main Blog Content Area */}
      <div className="pt-20"> {/* Offset for sticky nav */}
        <Blog />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}