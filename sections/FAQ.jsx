import { FAQ_ITEMS } from "@/constants/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function FAQ() {
  return (
    <section
      id="preguntas"
      className="scroll-mt-24 bg-white py-24 sm:py-32"
      aria-labelledby="faq-title"
    >
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas"
          title="Preguntas frecuentes"
          description="Todo lo que necesitás saber antes de agendar tu cita."
        />
        <h2 id="faq-title" className="sr-only">
          Preguntas frecuentes
        </h2>
        <div className="mt-14">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
