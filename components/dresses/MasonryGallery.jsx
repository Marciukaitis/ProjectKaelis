"use client";

import { DRESSES } from "@/constants/dresses";
import { DressCard } from "@/components/dresses/DressCard";

export function MasonryGallery() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-6">
      {DRESSES.map((dress, index) => (
        <DressCard key={dress.id} dress={dress} index={index} />
      ))}
    </div>
  );
}
