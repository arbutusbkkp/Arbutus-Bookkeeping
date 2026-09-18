import { Container } from './Container.jsx';

const TONE_BG = { page: 'var(--surface-page)', alt: 'var(--surface-alt)', card: 'var(--surface-card)' };

export function Section({ children, tone = 'page', id, style }) {
  return (
    <section id={id} style={{ background: TONE_BG[tone], padding: 'var(--section-y) 0', scrollMarginTop: 80, ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

export const CARD_GRID = { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--gutter)', alignItems: 'stretch' };
