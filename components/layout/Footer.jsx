import Link from "next/link";
import { SITE } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-kaelis-border bg-white">
      <Container className="flex flex-col items-center gap-8 py-14 text-center">
        <Link href="#inicio" aria-label="Kaelis Atelier — inicio" className="block py-1">
          <BrandWordmark size="footer" />
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

        <p className="max-w-md text-xs leading-relaxed text-kaelis-muted/90">
          <a href="#privacidad" className="underline-offset-2 hover:text-kaelis-hover hover:underline">
            Privacidad
          </a>
          {" · "}
          Tus datos se usan solo para coordinar tu cita.
        </p>
      </Container>
    </footer>
  );
}
