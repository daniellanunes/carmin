import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Works from "@/components/Works";
import Social from "@/components/Social";
import Flash from "@/components/Flash";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Works />
        <Social />
        <Flash />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
