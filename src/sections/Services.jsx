import { Section, CARD_GRID } from '../layout/Section.jsx';
import { SectionHeading, ServiceCard } from '../components/index.js';
import { SERVICES } from '../content.js';

export function Services() {
  return (
    <Section tone="alt" id="services">
      <SectionHeading eyebrow="Services" title="What I take off your plate" lede="Three ways to work together. Most clients start with a cleanup, then move onto monthly once the backlog is clear." />
      <div style={CARD_GRID} className="ab-3up">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
