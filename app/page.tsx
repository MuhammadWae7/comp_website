import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Fleet from "@/components/fleet";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Fleet />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
}
