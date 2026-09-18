import { Section } from '../layout/Section.jsx';
import { Badge, Button } from '../components/index.js';
import { BRAND, CREDENTIALS } from '../content.js';

export function About() {
  return (
    <Section tone="alt" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="ab-split">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            padding: 'clamp(32px,4vw,56px)',
            boxSizing: 'border-box',
          }}
        >
          <img src={BRAND.logo} alt="Arbutus Bookkeeping" style={{ width: '100%', maxWidth: 300, height: 'auto', display: 'block' }} />
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h2 style={{ margin: '12px 0 16px' }}>Nine years in accounting firms, now in your corner</h2>
          <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-body)' }}>
            I spent nine years inside accounting firms, and the same problem came across my desk every spring: good businesses handing over books that weren&rsquo;t ready, then paying for the
            cleanup twice.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            I started Arbutus to fix that earlier in the year. You get a CPA doing the bookkeeping itself, so the file is built the way it will need to be read at year end — and you get your
            attention back for the part of the business only you can do.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', margin: 'var(--space-6) 0 var(--space-8)' }}>
            {CREDENTIALS.map((c) => (
              <Badge key={c.label} tone="evergreen" icon={c.icon}>
                {c.label}
              </Badge>
            ))}
          </div>
          <Button href="#contact" icon="calendar-check" iconPosition="left">
            Book a free call
          </Button>
        </div>
      </div>
    </Section>
  );
}
