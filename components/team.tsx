import { Reveal } from "@/components/reveal";
import { members, party } from "@/lib/platform";

export function Team() {
  return (
    <section id="team" className="team-section" data-surface="dark">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Bullets and Ballots</p>
          <h2>Members</h2>
          <p className="candidate-line">
            Candidate: {party.candidate}
          </p>
        </Reveal>
        <div className="team-grid">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 60} className="team-reveal">
              <article className="team-card">
                <p>{member.role}</p>
                <h3>{member.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
