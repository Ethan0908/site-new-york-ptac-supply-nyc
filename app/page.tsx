import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const websiteHref = business.website;
const displayAddress = '65 4th Ave, 3rd floor, New York, NY 10003';

const prepItems = [
  'PTAC model or label photo',
  'Wall sleeve size or opening notes',
  'Building access or delivery constraints',
];

const focusAreas = [
  {
    eyebrow: 'For apartments',
    title: 'Replacement conversations that start with the unit you already have.',
    body: 'Call with the model number, a photo of the data plate, or the sleeve dimensions so the next step can be narrowed quickly.',
  },
  {
    eyebrow: 'For buildings',
    title: 'A local contact for Manhattan PTAC supply questions.',
    body: 'Useful when a manager, super, contractor, or owner needs a direct phone path instead of a generic online form.',
  },
  {
    eyebrow: 'For planning',
    title: 'Clear details before anyone commits to a direction.',
    body: 'The page keeps the path simple: collect the unit details, call, and confirm what makes sense for the space.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header" aria-label="Site header">
          <a className="brand" href="#top" aria-label={`${business.name} home`}>
            <span className="brand-mark">PTAC</span>
            <span>{business.name}</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#details">Details</a>
            <a href="#call">Call</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="kicker">Manhattan PTAC and HVAC supply contact</p>
            <h1 id="hero-title">A direct local starting point for PTAC supply in Manhattan.</h1>
            <p className="lede">
              New York PTAC Supply NYC helps Manhattan callers move from a unit question to a clear
              next step. Call with the model details, sleeve notes, or building constraints.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={phoneHref}>
                Call {business.phone}
              </a>
              <a className="button secondary" href={websiteHref}>
                Visit website
              </a>
            </div>
          </div>

          <aside className="signal-panel" aria-label="Business snapshot">
            <div className="panel-topline">
              <span>Service area</span>
              <strong>Manhattan</strong>
            </div>
            <div className="panel-gauge" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <dl className="spec-list">
              <div>
                <dt>Category</dt>
                <dd>HVAC / PTAC supply</dd>
              </div>
              <div>
                <dt>Google note</dt>
                <dd>5 rating from 5 reviews</dd>
              </div>
              <div>
                <dt>Address note</dt>
                <dd>{displayAddress}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="call-strip" id="call" aria-label="Fast contact">
        <div>
          <span>Phone-first contact</span>
          <strong>{business.phone}</strong>
        </div>
        <a href={phoneHref}>Start with a call</a>
      </section>

      <section className="content-section split" id="details">
        <div>
          <p className="section-label">Before you call</p>
          <h2>Have the PTAC details close by.</h2>
        </div>
        <div className="prep-card">
          <p>
            PTAC replacements can depend on the existing chassis, wall sleeve, electrical setup, and
            building access. A short list of details makes the first conversation more useful.
          </p>
          <ul>
            {prepItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section focus-grid" aria-label="Who this helps">
        {focusAreas.map((area) => (
          <article className="focus-card" key={area.title}>
            <p>{area.eyebrow}</p>
            <h3>{area.title}</h3>
            <span>{area.body}</span>
          </article>
        ))}
      </section>

      <section className="location-band" aria-label="Location and service area">
        <div>
          <p className="section-label">Local signal</p>
          <h2>Built around Manhattan buildings and PTAC-specific calls.</h2>
        </div>
        <div className="location-copy">
          <p>
            The available business record lists Manhattan as the city and service area, with an
            address note at {displayAddress}. Use the phone number for current availability,
            fit questions, and next-step coordination.
          </p>
          <a className="text-link" href={websiteHref}>
            Open ptacsupplynyc.com
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{business.name}</strong>
          <span>Manhattan, New York</span>
        </div>
        <a href={phoneHref}>{business.phone}</a>
      </footer>
    </main>
  );
}
