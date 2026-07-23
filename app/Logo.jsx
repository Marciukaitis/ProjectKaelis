import Image from "next/image";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const LOGO_SRC = {
  light: "/logo-light.png",
  dark: "/logo-dark.png",
};

export function Logo({
  className,
  height = 44,
  priority = false,
  variant = "light",
  withShadow = false,
}) {
  const src = LOGO_SRC[variant] ?? LOGO_SRC.light;

  return (
    <Image
      src={src}
      alt={`${SITE.name} — vestidos de novia`}
      width={Math.round(height * 3.2)}
      height={height}
      priority={priority}
      className={cn(
        "h-auto w-auto max-w-none object-contain",
        withShadow && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
        className,
      )}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
