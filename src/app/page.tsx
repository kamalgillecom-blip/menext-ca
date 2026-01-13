import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Mission } from "@/components/Mission";
import { TrustedBy } from "@/components/TrustedBy";
import { Testimonial } from "@/components/Testimonial";
import { Solutions } from "@/components/Solutions";
import { Benefits } from "@/components/Benefits";
import { Resources } from "@/components/Resources";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <Stats />
      <Mission />
      <Testimonial />
      <Solutions />
      <Benefits />
      <Resources />
      <CTA />
      <Footer />
    </main>
  );
}
