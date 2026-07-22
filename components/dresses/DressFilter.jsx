"use client";
import { DRESS_CATEGORIES } from "@/constants/dresses";
import { cn } from "@/lib/utils";
export function DressFilter({ active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar vestidos por categoría"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
    >
      {DRESS_CATEGORIES.map((category) => {
        const isActive = active === category.value;
        return (
          <button
            key={category.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.value)}
            className={cn(
              "px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300",
              isActive
                ? "text-kaelis-ink border-b border-kaelis-ink"
                : "text-kaelis-muted hover:text-kaelis-ink border-b border-transparent",
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
