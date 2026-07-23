"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { openAppointmentChat } from "@/lib/appointments";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn, scrollToId } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BrandLink } from "@/components/ui/BrandLink";
export function Navbar() {
  const scrolled = useScrollPosition(24);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToId(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_rgba(17,17,17,0.06)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <BrandLink
          scrolled={scrolled}
          onNavigate={() => setMobileOpen(false)}
        />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={cn(
                  "text-xs uppercase tracking-[0.18em] transition-colors",
                  scrolled
                    ? "text-kaelis-muted hover:text-kaelis-ink"
                    : "text-white/85 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            size="sm"
            onClick={openAppointmentChat}
            className={
              scrolled
                ? undefined
                : "border-white/50 bg-white/10 text-white hover:bg-white hover:text-kaelis-ink"
            }
          >
            Agendar cita
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center lg:hidden",
            scrolled ? "text-kaelis-ink" : "text-white",
          )}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-kaelis-border bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="block py-3 text-sm uppercase tracking-[0.16em] text-kaelis-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    openAppointmentChat();
                  }}
                >
                  Agendar cita
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
