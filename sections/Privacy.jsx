import { PRIVACY_DETAIL, PRIVACY_SUMMARY } from "@/constants/privacy";
import { Container } from "@/components/ui/Container";

export function Privacy() {
  return (
    <section
      id="privacidad"
      className="scroll-mt-24 border-t border-kaelis-border bg-[#FAF8F5] py-16 sm:py-20"
      aria-labelledby="privacidad-title"
    >
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-kaelis-muted">
          Privacidad
        </p>
        <h2
          id="privacidad-title"
          className="mt-4 font-display text-2xl text-kaelis-ink sm:text-3xl"
        >
          Tus datos, cuidados
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-kaelis-muted sm:text-base">
          {PRIVACY_SUMMARY}
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-kaelis-muted sm:text-base">
          {PRIVACY_DETAIL.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-kaelis-hover" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
