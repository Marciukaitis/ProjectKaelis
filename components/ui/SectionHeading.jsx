"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs uppercase tracking-[0.28em]",
            light ? "text-white/70" : "text-kaelis-muted",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-kaelis-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-kaelis-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
