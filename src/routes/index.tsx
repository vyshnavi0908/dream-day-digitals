import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Showcase } from "@/components/Showcase";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Day Digitals — Luxury Digital Invitation & Showcase Studio" },
      { name: "description", content: "Premium wedding invitations, birthday invitations, business and portfolio websites. Cinematic, elegant, unforgettable digital experiences." },
      { property: "og:title", content: "Dream Day Digitals — Luxury Digital Studio" },
      { property: "og:description", content: "Crafted Digitally. Remembered Forever. Premium invitation & showcase websites." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main className="relative noise">
        <Hero />
        <Marquee />
        <Showcase />
        <Services />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
