import Image from "next/image";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const LOGO_SRC = {
  light: "/logo-light.png",
  dark: "/logo-dark.png",
};

export function Logo({
  className,
  height = 52,
  priority = false,
  variant = "light",
  withShadow = false,
}) {
  const src = LOGO_SRC[variant] ?? LOGO_SRC.light;

  return (
    <Image
      src={src}
      alt={`${SITE.name} — vestidos de novia`}
      width={Math.round(height * 1.8)}
      height={height}
      priority={priority}
      className={cn(
        "h-auto w-auto max-w-none object-contain object-left",
        withShadow && "drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]",
        className,
      )}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
