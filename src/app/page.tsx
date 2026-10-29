import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Styles from "@/components/Styles";
import Works from "@/components/Works";
import Selos from "@/components/Selos";
import Studio from "@/components/Studio";
import Booking from "@/components/Booking";
import Social from "@/components/Social";
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
        <Styles />
        <Works />
        <Selos />
        <Studio />
        <Booking />
        <Social />
      </main>
      <Footer />
    </>
  );
}
