"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { planks } from "@/lib/platform";
import { cn } from "@/lib/utils";

export function Planks() {
  const [active, setActive] = useState(planks[0]?.id ?? "");

  useEffect(() => {
    const nodes = planks
      .map((plank) => document.getElementById(plank.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platform" className="platform-section" data-surface="light">
      <div className="plank-index">
        <div className="wrap plank-index-row">
          <p>The Platform</p>
          <nav aria-label="Party planks">
            {planks.map((plank) => (
              <a
                key={plank.id}
                href={`#${plank.id}`}
                aria-current={active === plank.id ? "true" : undefined}
                className={cn(active === plank.id && "is-active")}
              >
                {plank.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="wrap">
        <header className="platform-intro">
          <Reveal>
            <p className="eyebrow on-light">From the platform</p>
            <h2>Party Planks</h2>
          </Reveal>
        </header>
        {planks.map((plank) => (
          <article id={plank.id} key={plank.id} className="plank">
            <div className="plank-meta">
              <p className="plank-number">{plank.number}</p>
              <h3>{plank.title}</h3>
              <p className="plank-author">{plank.author}</p>
              {plank.figure ? (
                <aside className="figure">
                  {plank.figure.value ? <p className="figure-value">{plank.figure.value}</p> : null}
                  <p>{plank.figure.label}</p>
                  <p className="figure-source">{plank.figure.source}</p>
                </aside>
              ) : null}
            </div>
            <p className="plank-body">{plank.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
