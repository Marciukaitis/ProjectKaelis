"use client";
import {
  CalendarHeart,
  HeartHandshake,
  MessageCircleHeart,
  Sparkles,
  Wallet,
} from "lucide-react";
import { WHY_US_ITEMS } from "@/constants/why-us";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
const ICONS = {
  sparkles: Sparkles,
  heart: HeartHandshake,
  wallet: Wallet,
  calendar: CalendarHeart,
  message: MessageCircleHeart,
};
export function WhyUs() {
  return (
    <section
      className="scroll-mt-24 bg-[#FAF8F5] py-24 sm:py-32"
      aria-labelledby="por-que-title"
    >
      <Container>
        <SectionHeading
          eyebrow="La experiencia"
          title="Por qué elegirnos"
          description="Una forma más simple, cercana y elegante de encontrar tu vestido de novia ideal."
        />
        <h2 id="por-que-title" className="sr-only">
          Por qué elegirnos
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <FadeIn key={item.id} delay={index * 0.06}>
                <article className="h-full border-t border-kaelis-border pt-8">
                  <Icon className="h-6 w-6 text-kaelis-hover" aria-hidden />
                  <h3 className="mt-5 font-display text-xl text-kaelis-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-kaelis-muted sm:text-base">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
