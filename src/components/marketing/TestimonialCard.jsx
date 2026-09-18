import { Card } from '../core/Card.jsx';
import { StarRating } from '../core/StarRating.jsx';

/** A single client review, styled after the Google-reviews widget the site embeds. */
export function TestimonialCard({ quote, name, meta, rating = 5, initials, source = 'Posted on Google', style, ...rest }) {
  return (
    <Card {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', height: '100%', boxSizing: 'border-box', ...style }}>
      <StarRating rating={rating} size={15} />
      <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--text-body)' }}>{quote}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'auto' }}>
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 'var(--radius-pill)',
            background: 'var(--green-200)',
            color: 'var(--green-800)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
          }}
        >
          {initials || String(name || '?').slice(0, 1)}
        </span>
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>{name}</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{meta || source}</span>
        </span>
      </div>
    </Card>
  );
}
