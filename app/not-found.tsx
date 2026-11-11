import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="content" className="not-found" data-surface="dark">
      <p className="eyebrow">Bullets and Ballots</p>
      <h1>This page is not on the platform.</h1>
      <Button asChild variant="outline">
        <Link href="/">Back to the top</Link>
      </Button>
    </main>
  );
}
