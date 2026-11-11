import { LogoToken } from "@/components/logo-token";
import { nav, party } from "@/lib/platform";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-surface="dark">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <LogoToken className="footer-token" />
          <div>
            <p className="footer-name">{party.name}</p>
            <p className="footer-slogan">{party.slogan}</p>
            <p className="footer-credit">Emblem by graphic designer Cullen Whites.</p>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="class-note">
        A Moscow High School U.S. Government class project (Period 1, Dalebout).
        This is not a real campaign.
      </p>
    </footer>
  );
}
