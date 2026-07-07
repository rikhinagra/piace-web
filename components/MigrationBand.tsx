import Reveal from "./Reveal";

export default function MigrationBand() {
  return (
    <section id="switch">
      <div className="wrap">
        <Reveal>
          <div className="band">
            <div>
              <span className="band-eyebrow">
                Switching is the hard part, so we own it
              </span>
              <h2>
                Move off CASEpeer in <span className="serif">Days</span>, Not
                Months.
              </h2>
              <p>
                Your firm lives in its CMS, and that&apos;s exactly why nobody
                switches. We do the migration for you: cases, contacts,
                documents, and history brought over and verified, so the
                cutover isn&apos;t your problem.
              </p>
            </div>
            <a href="#book" className="btn-blue">
              Plan your migration
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
