"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { LogoToken } from "@/components/logo-token";
import { party } from "@/lib/platform";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(0, ${window.scrollY * 0.16}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="hero" data-surface="dark">
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <h1>{party.hero}</h1>
        <Button asChild variant="outline" size="lg">
          <a href="#platform">Read the Platform</a>
        </Button>
      </div>
      <LogoToken bob className="hero-token" />
      <a className="scroll-cue" href="#candidate">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
