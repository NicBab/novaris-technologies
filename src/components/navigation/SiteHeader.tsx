"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NovarisMark } from "@/components/marketing/NovarisMark";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <NovarisMark className="h-8 w-8" />

          <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
            Novaris
            <span className="text-muted-foreground">
              {" "}
              Technologies
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/software"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore Our Software
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/80 hover:bg-primary/20 hover:shadow-[var(--glow-primary)]"
          >
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-md border border-border p-2 text-foreground"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border/60 py-4 font-display text-lg text-muted-foreground",
                    active && "text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-center text-sm font-medium"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}