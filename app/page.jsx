import { Hero } from "@/sections/Hero";
import { OurStory } from "@/sections/OurStory";
import { WhyUs } from "@/sections/WhyUs";
import { HowItWorks } from "@/sections/HowItWorks";
import { Gallery } from "@/sections/Gallery";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { Privacy } from "@/sections/Privacy";
import { Contact } from "@/sections/Contact";
export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyUs />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Privacy />
      <Contact />
    </>
  );
}
