import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Fleet from "@/components/fleet";
import FinalCTA from "@/components/final-cta";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Fleet />
      <Features />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
