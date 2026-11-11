"use client";

import { useLayoutEffect, useRef } from "react";
import { Portrait } from "@/components/portrait";
import { bioSentences, party } from "@/lib/platform";
import { syncEnhanced } from "@/lib/motion";

export function BioReveal({ headshot }: { headshot: string | null }) {
  const wrapRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let frame = 0;
    const update = () => {
      const on = syncEnhanced();
      const lines = linesRef.current.filter(Boolean) as HTMLParagraphElement[];
      if (!on) {
        lines.forEach((line) => {
          line.style.opacity = "";
          line.style.zIndex = "";
        });
        dotsRef.current.forEach((dot) => dot?.style.setProperty("opacity", ""));
        return;
      }

      const rect = wrap.getBoundingClientRect();
      const scrollable = wrap.offsetHeight - window.innerHeight;
      const traveled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1));
      const progress = scrollable > 0 ? traveled / scrollable : 1;
      const span = Math.max(lines.length - 1, 1);
      const cursor = progress * span;

      lines.forEach((line, index) => {
        const dist = Math.abs(cursor - index);
        const opacity = dist <= 0.38 ? 1 : dist >= 0.62 ? 0 : (0.62 - dist) / 0.24;
        line.style.opacity = opacity.toFixed(3);
        line.style.zIndex = opacity > 0.45 ? "1" : "0";
        const dot = dotsRef.current[index];
        if (dot) dot.style.opacity = String(0.25 + opacity * 0.75);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="candidate"
      ref={wrapRef}
      className="bio-wrap"
      data-surface="dark"
    >
      <div className="bio-pin">
        <div className="bio-grid">
          <Portrait src={headshot} />
          <div className="bio-copy">
            <p className="eyebrow">Candidate</p>
            <h2>{party.candidate}</h2>
            <div className="bio-lines">
              {bioSentences.map((sentence, index) => (
                <p
                  key={sentence}
                  className="bio-line"
                  ref={(node) => {
                    linesRef.current[index] = node;
                  }}
                >
                  {sentence}
                </p>
              ))}
            </div>
            <div className="bio-dots" aria-hidden="true">
              {bioSentences.map((sentence, index) => (
                <span
                  key={sentence}
                  ref={(node) => {
                    dotsRef.current[index] = node;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
