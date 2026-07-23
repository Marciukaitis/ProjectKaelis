"use client";

import Link from "next/link";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { cn, scrollToId } from "@/lib/utils";

export function BrandLink({
  className,
  onNavigate,
  scrolled = false,
}) {
  return (
    <Link
      href="#inicio"
      onClick={(event) => {
        event.preventDefault();
        scrollToId("#inicio");
        onNavigate?.();
      }}
      className={cn("inline-flex shrink-0 items-center py-1", className)}
      aria-label="Kaelis Atelier — inicio"
    >
      <BrandWordmark inverted={!scrolled} />
    </Link>
  );
}
