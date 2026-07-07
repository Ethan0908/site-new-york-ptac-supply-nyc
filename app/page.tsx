import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const address = '65 4th Ave 3rd floor, New York, NY 10003';

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">PTAC and HVAC supply in Manhattan</p>
            <h1>Parts, units, and practical help for PTAC projects in New York City.</h1>
            <p className="lead">
              New York PTAC Supply NYC is a Manhattan resource for PTAC and HVAC supply
              inquiries, with direct phone support and a public storefront listing near
              Union Square.
            </p>
            <div className="ctaRow" aria-label="Contact options">
              <a className="button primary" href={phoneHref}>
                <PhoneIcon />
                Call {business.phone}
              </a>
              <a className="button secondary" href={business.website}>
                Visit website
                <ExternalArrow />
              </a>
            </div>
          </div>

          <aside className="supplyPanel" aria-label="Business snapshot">
            <div className="panelHeader">
              <span>NYC supply desk</span>
              <strong>PTAC</strong>
            </div>
            <dl className="specList">
              <div>
                <dt>Service area</dt>
                <dd>Manhattan</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>HVAC services</dd>
              </div>
              <div>
                <dt>Public rating note</dt>
                <dd>5 rating from 5 Google reviews</dd>
              </div>
              <div>
                <dt>Listed location</dt>
                <dd>{address}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="routeBand" aria-label="Primary visitor paths">
        <div className="routeIntro">
          <p className="eyebrow">Start here</p>
          <h2>A short path from building need to supply answer.</h2>
        </div>
        <div className="routeSteps">
          <article>
            <span>01</span>
            <h3>Call with the PTAC need</h3>
            <p>Share the unit, part, or building requirement you are trying to source.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Confirm fit and availability</h3>
            <p>Use the website or phone line to check the next practical step.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Coordinate in Manhattan</h3>
            <p>Work from the NYC listing and service area without a long sales funnel.</p>
          </article>
        </div>
      </section>

      <section className="details">
        <div className="detailCopy">
          <p className="eyebrow">Built for local building work</p>
          <h2>Focused on PTAC supply, not a generic HVAC brochure.</h2>
          <p>
            PTAC work in Manhattan often starts with constraints: unit size, building
            access, replacement timing, and exact parts. This page keeps the next step
            simple: call the supply desk or continue to the business website.
          </p>
        </div>
        <div className="contactCard">
          <h2>Contact</h2>
          <p className="contactLine">
            <span>Phone</span>
            <a href={phoneHref}>{business.phone}</a>
          </p>
          <p className="contactLine">
            <span>Website</span>
            <a href={business.website}>ptacsupplynyc.com</a>
          </p>
          <p className="contactLine">
            <span>Area</span>
            <strong>Manhattan, NY</strong>
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>{business.name}</p>
        <a href={phoneHref}>Call {business.phone}</a>
      </footer>

      <a className="mobileCall" href={phoneHref}>
        <PhoneIcon />
        Call {business.phone}
      </a>
    </main>
  );
}
