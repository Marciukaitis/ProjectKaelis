"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/constants/dresses";
import { SITE } from "@/constants/site";
import { openAppointmentChat } from "@/lib/appointments";
import { Button } from "@/components/ui/Button";
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Inicio"
    >
      <Image
        src={HERO_IMAGE}
        alt="Vestido de novia elegante de Kaelis Atelier"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/15"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-white/75">
            Vestidos de novia
          </p>
          <h1 className="font-display text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Encontrá el vestido de novia perfecto para tu boda.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Vestidos de novia elegantes, modernos y accesibles para que vivas
            uno de los momentos más importantes con total confianza.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#vestidos" variant="primary" size="lg">
              Ver vestidos de novia
            </Button>
            <Button onClick={openAppointmentChat} variant="outline" size="lg">
              Agendar cita
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
