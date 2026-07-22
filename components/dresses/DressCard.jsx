"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const aspectClass = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[3/5]",
  square: "aspect-square",
};

export function DressCard({ dress, index = 0 }) {
  const whatsappMessage = encodeURIComponent(
    `Hola Kaelis Atelier, quiero consultar el vestido de novia ${dress.name}.`,
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group mb-5 break-inside-avoid sm:mb-6"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-kaelis-border",
          aspectClass[dress.aspect ?? "portrait"],
        )}
      >
        <Image
          src={dress.image}
          alt={dress.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Button
            href={`${SITE.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="w-full bg-white text-kaelis-ink hover:bg-kaelis-secondary"
            aria-label={`Consultar el vestido de novia ${dress.name}`}
          >
            Consultar modelo
          </Button>
        </div>
      </div>
      <div className="mt-3 px-0.5">
        <h3 className="font-display text-lg text-kaelis-ink">{dress.name}</h3>
        <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-kaelis-muted">
          Vestido de novia
        </p>
      </div>
    </motion.article>
  );
}
