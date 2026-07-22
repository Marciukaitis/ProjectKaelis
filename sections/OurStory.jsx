"use client";
import Image from "next/image";
import { STORY_IMAGE } from "@/constants/dresses";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function OurStory() {
  return (
    <section
      id="historia"
      className="scroll-mt-24 bg-white py-24 sm:py-32"
      aria-labelledby="historia-title"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={STORY_IMAGE}
                alt="Atelier de vestidos de novia Kaelis Atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Nuestra historia"
              title="Kaelis Atelier nació de una experiencia muy personal."
              className="max-w-none"
            />
            <h2 id="historia-title" className="sr-only">
              Nuestra historia
            </h2>

            <FadeIn
              delay={0.1}
              className="mt-8 space-y-5 text-base leading-relaxed text-kaelis-muted sm:text-lg"
            >
              <p>
                Cuando me tocó buscar mi vestido de novia descubrí que en
                Uruguay era muy difícil encontrar opciones lindas, modernas y de
                calidad sin tener que pagar precios muy altos.
              </p>
              <p>
                Sentía que debía elegir entre gastar demasiado dinero o
                conformarme con algo que realmente no me gustaba.
              </p>
              <p>
                Ahí entendí que seguramente muchas otras mujeres estaban
                viviendo exactamente lo mismo.
              </p>
              <p className="font-display text-xl text-kaelis-ink sm:text-2xl">
                Por eso nació Kaelis Atelier.
              </p>
              <p>
                Nuestro objetivo es ofrecer vestidos de novia elegantes,
                actuales y accesibles para que cada novia pueda sentirse hermosa
                en su boda sin preocuparse por el presupuesto.
              </p>
              <p>
                Queremos que la experiencia de elegir tu vestido sea simple,
                cercana y agradable desde el primer contacto.
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
