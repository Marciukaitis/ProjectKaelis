"use client";
import { SITE } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hola Kaelis Atelier, quiero agendar una cita para ver vestidos de novia.",
  );
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-kaelis-ink py-24 sm:py-32"
      aria-labelledby="contacto-title"
    >
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/60">
            Contacto
          </p>
          <h2
            id="contacto-title"
            className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            ¿Lista para encontrar tu vestido de novia ideal?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            Escribinos y coordinamos tu cita. Te acompañamos con cercanía y
            criterio para que elijas con total confianza.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={`${SITE.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="min-w-[220px] gap-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="min-w-[220px] gap-2"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
