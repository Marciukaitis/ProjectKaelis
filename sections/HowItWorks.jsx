"use client";

import { CalendarHeart, HeartHandshake, MessageCircle, Sparkles } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";
import { openAppointmentChat } from "@/lib/appointments";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS = {
  message: MessageCircle,
  calendar: CalendarHeart,
  sparkles: Sparkles,
  heart: HeartHandshake,
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 bg-white py-24 sm:py-32"
      aria-labelledby="como-funciona-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Tu cita"
          title="Cómo funciona"
          description="Un proceso simple y claro, pensado para que vivas la experiencia con tranquilidad."
        />
        <h2 id="como-funciona-title" className="sr-only">
          Cómo funciona la cita
        </h2>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = ICONS[step.icon];

            return (
              <FadeIn key={step.id} delay={index * 0.06}>
                <li className="relative h-full">
                  <span className="mb-4 block font-display text-4xl text-kaelis-secondary/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-kaelis-hover" aria-hidden />
                  <h3 className="mt-4 font-display text-xl text-kaelis-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-kaelis-muted sm:text-base">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            );
          })}
        </ol>

        <FadeIn delay={0.2} className="mt-14 text-center">
          <Button onClick={openAppointmentChat}>Agendar mi cita</Button>
        </FadeIn>
      </Container>
    </section>
  );
}
