import { Section, CARD_GRID } from '../layout/Section.jsx';
import { SectionHeading, PricingCard } from '../components/index.js';
import { TIERS } from '../content.js';

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading eyebrow="Pricing" title="You&rsquo;ll know the number before we start" lede="Flat monthly fees, quoted after a short call and a look at your file. Month to month — no long-term contract." />
      <div style={CARD_GRID} className="ab-3up">
        {TIERS.map((t) => (
          <PricingCard key={t.name} {...t} ctaHref="#contact" />
        ))}
      </div>
      <p style={{ marginTop: 'var(--space-8)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        Every plan starts at the price shown. Transaction volume, number of accounts and how far behind the file is are what move the final quote — nothing else.
      </p>
    </Section>
  );
}
