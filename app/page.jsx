import { Hero } from "@/sections/Hero";
import { OurStory } from "@/sections/OurStory";
import { WhyUs } from "@/sections/WhyUs";
import { Gallery } from "@/sections/Gallery";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";
export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
