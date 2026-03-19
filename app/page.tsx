import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden selection:bg-peach-200 selection:text-peach-900">
      <Navbar />
      <Hero />
      <Locations />
      <Gallery />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <FloatingWA />
    </main>
  );
}