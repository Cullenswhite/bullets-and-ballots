"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type LogoTokenProps = {
  className?: string;
  bob?: boolean;
};

export function LogoToken({ className, bob = false }: LogoTokenProps) {
  const faceRef = useRef<HTMLDivElement>(null);
  const canTilt = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      canTilt.current = fine.matches && !reduce.matches;
    };
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!canTilt.current) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "transform 70ms linear";
    el.style.transform = `rotateX(${(-py * 14).toFixed(2)}deg) rotateY(${(px * 18).toFixed(2)}deg)`;
    el.style.setProperty("--sx", `${(50 + px * 80).toFixed(1)}%`);
    el.style.setProperty("--sy", `${(50 + py * 80).toFixed(1)}%`);
    const shine = el.querySelector<HTMLElement>(".logo-shine");
    if (shine) shine.style.opacity = "1";
  }

  function onLeave(event: MouseEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    el.style.transition = "transform 700ms cubic-bezier(.2,.8,.2,1)";
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    const shine = el.querySelector<HTMLElement>(".logo-shine");
    if (shine) shine.style.opacity = "0";
  }

  return (
    <div className={cn("logo-token", bob && "logo-bob", className)}>
      <div className="logo-perspective">
        <div
          ref={faceRef}
          className="logo-face"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* Circular crop of the party emblem. Sized by the parent box, never stretched past it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/party-logo.webp"
            alt=""
            width={640}
            height={640}
            draggable={false}
          />
          <span className="logo-shine" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
