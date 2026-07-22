"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Testimonials() {
  return (
    <section
      className="scroll-mt-24 bg-[#FAF8F5] py-24 sm:py-32"
      aria-labelledby="testimonios-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Confianza"
          title="Lo que dicen nuestras clientas"
          description="Historias reales de novias que vivieron su boda con Kaelis."
        />
        <h2 id="testimonios-title" className="sr-only">
          Testimonios
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <article className="h-full border border-kaelis-border bg-white p-8">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={item.photo}
                      alt={`Foto de ${item.name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg text-kaelis-ink">
                      {item.name}
                    </p>
                    <div className="mt-1 flex gap-0.5" aria-label="5 estrellas">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-kaelis-secondary text-kaelis-secondary"
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-kaelis-muted sm:text-base">
                  “{item.comment}”
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
