"use client";

import { useEffect, useState } from "react";
import { LogoToken } from "@/components/logo-token";
import { nav } from "@/lib/platform";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [surface, setSurface] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const bar = document.querySelector(".site-header");
      const mark = (bar?.getBoundingClientRect().bottom ?? 68) + 32;
      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      let next: "dark" | "light" = "dark";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= mark && rect.bottom > mark) {
          next = section.dataset.surface === "light" ? "light" : "dark";
        }
      });
      setSurface(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn("site-header", scrolled && "is-scrolled")}
      data-surface={surface}
    >
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="header-bar">
        <a className="brand" href="#top">
          <LogoToken className="header-token" />
          <span>Bullets and Ballots</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
