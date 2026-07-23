import { cn } from "@/lib/utils";

const SIZES = {
  nav: "text-[1.35rem] leading-none sm:text-[1.65rem]",
  footer: "text-3xl leading-none sm:text-4xl",
};

export function BrandWordmark({
  className,
  inverted = false,
  size = "nav",
}) {
  return (
    <span
      className={cn(
        "font-display tracking-[0.14em] uppercase",
        SIZES[size],
        inverted ? "text-white" : "text-kaelis-ink",
        className,
      )}
    >
      Kaelis Atelier
    </span>
  );
}
