import { Section } from '../layout/Section.jsx';
import { Badge, Button, Icon } from '../components/index.js';
import { BRAND, CREDENTIALS } from '../content.js';

export function Hero() {
  return (
    <Section id="top" style={{ paddingTop: 'clamp(40px,5vw,84px)', paddingBottom: 'clamp(40px,5vw,84px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }} className="ab-split">
        <div>
          <Badge tone="soft" icon="map-pin">
            Serving the {BRAND.area}
          </Badge>
          <h1 style={{ margin: '20px 0 18px', fontSize: 'var(--text-hero)', lineHeight: 'var(--leading-tight)' }}>
            We handle the ledger,
            <br />
            <strong style={{ fontWeight: 700 }}>so you can handle the business.</strong>
          </h1>
          <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '48ch' }}>
            I&rsquo;m Logan Shim, a CPA and QuickBooks ProAdvisor. I keep tax-ready books for small businesses in the Greater Vancouver Area so owners can spend their time growing the business
            instead of chasing receipts.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            <Button size="lg" icon="calendar-check" iconPosition="left" href="#contact">
              Book a free call
            </Button>
            <Button size="lg" variant="secondary" href={`tel:${BRAND.phone.replace(/\D/g, '')}`}>
              Call {BRAND.phone}
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            {CREDENTIALS.map((c) => (
              <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-muted)' }}>
                <Icon name="check" size={16} strokeWidth={2.25} color="var(--mark-check)" />
                {c.label}
              </span>
            ))}
          </div>
        </div>
        <figure style={{ margin: 0, position: 'relative' }}>
          <img
            src={BRAND.headshot}
            alt="Logan Shim"
            style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '4 / 4.2' }}
          />
          <figcaption
            style={{
              position: 'absolute',
              left: 'var(--space-5)',
              bottom: 'var(--space-5)',
              right: 'var(--space-5)',
              background: 'var(--surface-card)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4) var(--space-5)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--text-heading)' }}>{BRAND.person}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Owner &amp; bookkeeper · Certified QuickBooks ProAdvisor</div>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
