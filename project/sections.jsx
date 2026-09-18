function Hero() {
  return (
    <Section id="top" style={{ paddingTop: 'clamp(40px,5vw,84px)', paddingBottom: 'clamp(40px,5vw,84px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }} className="ab-split">
        <div>
          <Badge tone="soft" icon="map-pin">Serving the {BRAND.area}</Badge>
          <h1 style={{ margin: '20px 0 18px', fontSize: 'var(--text-hero)', lineHeight: 'var(--leading-tight)' }}>
            We handle the ledger,<br /><strong style={{ fontWeight: 700 }}>so you can handle the business.</strong>
          </h1>
          <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '48ch' }}>
            I&rsquo;m Logan Shim, a CPA and QuickBooks ProAdvisor. I keep tax-ready books for small businesses in the Greater Vancouver Area so owners can spend their time growing the business instead of chasing receipts.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            <Button size="lg" icon="calendar-check" iconPosition="left" href="#contact">Book a free call</Button>
            <Button size="lg" variant="secondary" href={`tel:${BRAND.phone.replace(/\D/g, '')}`}>Call {BRAND.phone}</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            {CREDENTIALS.map((c) => (
              <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-muted)' }}>
                <Icon name="check" size={16} strokeWidth={2.25} color="var(--mark-check)" />{c.label}
              </span>
            ))}
          </div>
        </div>
        <figure style={{ margin: 0, position: 'relative' }}>
          <img src={BRAND.headshot} alt="Logan Shim" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '4 / 4.2' }} />
          <figcaption style={{ position: 'absolute', left: 'var(--space-5)', bottom: 'var(--space-5)', right: 'var(--space-5)', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4) var(--space-5)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--text-heading)' }}>{BRAND.person}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Owner &amp; bookkeeper · Certified QuickBooks ProAdvisor</div>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section tone="alt" id="services">
      <SectionHeading eyebrow="Services" title="What I take off your plate" lede="Three ways to work together. Most clients start with a cleanup, then move onto monthly once the backlog is clear." />
      <div style={CARD_GRID} className="ab-3up">
        {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading eyebrow="Pricing" title="You&rsquo;ll know the number before we start" lede="Flat monthly fees, quoted after a short call and a look at your file. Month to month — no long-term contract." />
      <div style={CARD_GRID} className="ab-3up">
        {TIERS.map((t) => <PricingCard key={t.name} {...t} ctaHref="#contact" />)}
      </div>
      <p style={{ marginTop: 'var(--space-8)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        Every plan starts at the price shown. Transaction volume, number of accounts and how far behind the file is are what move the final quote — nothing else.
      </p>
    </Section>
  );
}

function About() {
  return (
    <Section tone="alt" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="ab-split">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 'clamp(32px,4vw,56px)', boxSizing: 'border-box' }}>
          <img src={BRAND.logo} alt="Arbutus Bookkeeping" style={{ width: '100%', maxWidth: 300, height: 'auto', display: 'block' }} />
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h2 style={{ margin: '12px 0 16px' }}>Nine years in accounting firms, now in your corner</h2>
          <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-body)' }}>
            I spent nine years inside accounting firms, and the same problem came across my desk every spring: good businesses handing over books that weren&rsquo;t ready, then paying for the cleanup twice.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            I started Arbutus to fix that earlier in the year. You get a CPA doing the bookkeeping itself, so the file is built the way it will need to be read at year end — and you get your attention back for the part of the business only you can do.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', margin: 'var(--space-6) 0 var(--space-8)' }}>
            {CREDENTIALS.map((c) => <Badge key={c.label} tone="evergreen" icon={c.icon}>{c.label}</Badge>)}
          </div>
          <Button href="#contact" icon="calendar-check" iconPosition="left">Book a free call</Button>
        </div>
      </div>
    </Section>
  );
}

function Closing() {
  return (
    <CTABanner title="Every month you wait costs you clarity." body="Send your email and I&rsquo;ll come back with two questions and a time to talk. Twenty minutes, no pitch, no obligation.">
      <EmailCaptureForm note="I read and reply to these myself, usually the same day." />
    </CTABanner>
  );
}

Object.assign(window, { Hero, Services, Pricing, About, Closing });
