"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { cn, scrollToId } from "@/lib/utils";

export function BrandLink({
  className,
  onNavigate,
  priority = false,
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
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Kaelis Atelier — inicio"
    >
      <Logo
        height={64}
        priority={priority}
        variant="light"
        withShadow={!scrolled}
        className="h-16 w-auto sm:h-[4.5rem]"
      />
    </Link>
  );
}
