"use client";

import { Navigation } from "../../../components/navigation";
import BlogPostTemplate from "../../../components/blog_page"; // Your template component
import { Footer } from "../../../components/footer";

export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <main className="bg-[#0A192F] min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        {/* We pass the slug here if you want to fetch specific data later */}
        <BlogPostTemplate />
      </div>

      <Footer />
    </main>
  );
}