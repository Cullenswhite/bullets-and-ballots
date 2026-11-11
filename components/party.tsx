import { Reveal } from "@/components/reveal";
import { party, pledge, preamble } from "@/lib/platform";

export function Party() {
  return (
    <>
      <section id="goal" className="goal-section" data-surface="light">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow on-light">Goal</p>
            <h2 className="goal-line">{party.goal}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div id="preamble" className="preamble">
              <p className="eyebrow on-light">Preamble</p>
              <p>{preamble}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="pledge" className="pledge-section" data-surface="dark">
        <div className="wrap pledge-inner">
          <Reveal>
            <p className="eyebrow">Pledge</p>
            <span className="gold-rule wide" aria-hidden="true" />
            <div className="pledge-lines">
              {pledge.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <span className="gold-rule wide" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
