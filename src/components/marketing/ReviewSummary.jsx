import { StarRating } from '../core/StarRating.jsx';

/** Aggregate review figure that heads the social-proof section. */
export function ReviewSummary({ rating = 4.9, count = 21, source = 'Google reviews', action, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flexWrap: 'wrap', ...style }}>
      <span style={{ fontFamily: 'var(--font-figures)', fontVariantNumeric: 'tabular-nums', fontSize: '2rem', fontWeight: 'var(--weight-medium)', color: 'var(--text-heading)', lineHeight: 1 }}>
        {rating.toFixed(1)}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <StarRating rating={rating} size={17} />
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          {count} {source}
        </span>
      </span>
      {action ? <span style={{ marginLeft: 'auto' }}>{action}</span> : null}
    </div>
  );
}
