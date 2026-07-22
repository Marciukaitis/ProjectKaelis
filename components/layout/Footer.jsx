import Link from "next/link";
import { SITE } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-kaelis-border bg-white">
      <Container className="flex flex-col items-center gap-8 py-14 text-center">
        <Link
          href="#inicio"
          className="font-display text-2xl tracking-wide text-kaelis-ink"
        >
          {SITE.name}
        </Link>

        <div className="flex items-center gap-6">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Kaelis Atelier"
            className="text-kaelis-muted transition-colors hover:text-kaelis-hover"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Kaelis Atelier"
            className="text-kaelis-muted transition-colors hover:text-kaelis-hover"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.12em] text-kaelis-muted">
          © {year} {SITE.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
