import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MasonryGallery } from "@/components/dresses/MasonryGallery";
export function Gallery() {
  return (
    <section
      id="vestidos"
      className="scroll-mt-24 bg-white py-24 sm:py-32"
      aria-labelledby="vestidos-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Colección"
          title="Vestidos de novia"
          description="Explorá nuestra selección. Cada modelo está pensado para que te sientas segura y elegante en tu boda."
        />
        <h2 id="vestidos-title" className="sr-only">
          Vestidos de novia
        </h2>
        <div className="mt-14">
          <MasonryGallery />
        </div>
      </Container>
    </section>
  );
}
