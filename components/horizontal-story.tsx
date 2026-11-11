"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { PublicImage } from "@/lib/media";
import { syncEnhanced } from "@/lib/motion";
import { party } from "@/lib/platform";

export function HorizontalStory({ photo }: { photo: PublicImage | null }) {
  const wrapRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!wrap || !pin || !track) return;

    const panels = Array.from(track.querySelectorAll<HTMLElement>(".h-panel"));
    let frame = 0;

    const update = () => {
      const on = syncEnhanced();
      if (!on) {
        wrap.style.height = "";
        track.style.transform = "";
        panels.forEach((panel) => {
          panel.style.width = "";
        });
        pin.style.setProperty("--hx", "0");
        return;
      }

      const width = pin.clientWidth;
      panels.forEach((panel) => {
        panel.style.width = `${width}px`;
      });
      const maxX = Math.max(0, track.scrollWidth - width);
      const hold = pin.offsetHeight * 0.28;
      wrap.style.height = `${pin.offsetHeight + maxX + hold}px`;

      const rect = wrap.getBoundingClientRect();
      const traveled = Math.min(Math.max(-rect.top, 0), maxX + hold);
      const progress = maxX > 0 ? Math.min(traveled / maxX, 1) : 1;
      track.style.transform = `translate3d(${(-progress * maxX).toFixed(2)}px, 0, 0)`;
      pin.style.setProperty("--hx", progress.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(onScroll);
    observer.observe(pin);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const showPhoto = Boolean(photo) && !broken;
  const displayWidth = photo ? Math.min(photo.width, 360) : 297;

  return (
    <section id="story" ref={wrapRef} className="h-wrap" data-surface="dark">
      <div ref={pinRef} className="h-pin">
        <div ref={trackRef} className="h-track">
          <article className="h-panel panel-ink">
            <div className="panel-center">
              <p className="eyebrow">The party</p>
              <h2 className="slogan">{party.slogan}</h2>
            </div>
          </article>
          <article className="h-panel panel-ink">
            <div className="panel-center">
              <p className="eyebrow">Candidate</p>
              <h2 className="candidate-lockup">
                Sam
                <br />
                Drake-Weiss
              </h2>
            </div>
          </article>
          <article className="h-panel panel-photo">
            <div className="photo-layout">
              <div className="photo-copy">
                <p className="eyebrow on-crimson">Candidate</p>
                <h2>
                  Sam <span className="nowrap">Drake-Weiss</span>
                </h2>
                <p className="photo-kicker">{party.slogan}</p>
              </div>
              <figure className="photo-mat">
                <div className="photo-halo" aria-hidden="true" />
                {showPhoto && photo ? (
                  // Keep the file at its own pixel size so a 297×388 photograph stays sharp.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo.src}
                    alt="Sam Drake-Weiss leaning against a tree"
                    width={photo.width}
                    height={photo.height}
                    style={{
                      width: `min(100%, ${displayWidth}px)`,
                      height: "auto",
                      maxHeight: `min(62vh, ${photo.height}px)`,
                    }}
                    onError={() => setBroken(true)}
                  />
                ) : (
                  <div
                    className="photo-slot"
                    data-slot="public/photos/sam-tree.jpg"
                    style={{ width: "min(100%, 297px)", aspectRatio: "297 / 388" }}
                  >
                    <p>S.D.W.</p>
                    <p>Photograph slot</p>
                  </div>
                )}
                <figcaption>Sam Drake-Weiss</figcaption>
              </figure>
            </div>
          </article>
        </div>
        <div className="h-progress" aria-hidden="true">
          <span />
        </div>
        <p className="sideways-hint">
          Scroll
          <i />
        </p>
      </div>
    </section>
  );
}
