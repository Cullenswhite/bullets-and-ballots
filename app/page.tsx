import { BioReveal } from "@/components/bio-reveal";
import { Hero } from "@/components/hero";
import { HorizontalStory } from "@/components/horizontal-story";
import { Party } from "@/components/party";
import { Planks } from "@/components/planks";
import { Team } from "@/components/team";
import { resolveHeadshot, resolveTreePhoto } from "@/lib/media";

export default function HomePage() {
  const headshot = resolveHeadshot();
  const tree = resolveTreePhoto();

  return (
    <main id="content">
      <Hero />
      <BioReveal headshot={headshot?.src ?? null} />
      <HorizontalStory photo={tree} />
      <Party />
      <Planks />
      <Team />
    </main>
  );
}
