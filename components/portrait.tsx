type PortraitProps = {
  src: string | null;
};

export function Portrait({ src }: PortraitProps) {
  if (src) {
    return (
      <figure className="portrait">
        <div className="portrait-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Sam Drake-Weiss" className="portrait-photo" />
        </div>
        <figcaption>Sam Drake-Weiss</figcaption>
      </figure>
    );
  }

  return (
    <figure className="portrait">
      <div className="portrait-frame" data-slot="public/candidate/headshot.jpg">
        <div className="portrait-plate">
          <p className="portrait-initials">S.D.W.</p>
          <p className="portrait-name">Sam Drake-Weiss</p>
          <span className="gold-rule" aria-hidden="true" />
          <p className="portrait-status">Portrait forthcoming</p>
        </div>
      </div>
      <figcaption>
        Official portrait slot · public/candidate/headshot.jpg
      </figcaption>
    </figure>
  );
}
