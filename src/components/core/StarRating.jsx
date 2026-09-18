import { Icon } from './Icon.jsx';

/** Five-star row in Google review gold, with optional "4.9 · 21 reviews" caption. */
export function StarRating({ rating = 5, size = 16, count, showValue = false, style, ...rest }) {
  const full = Math.round(rating);
  return (
    <div {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', ...style }}>
      <span style={{ display: 'inline-flex', gap: 2 }} role="img" aria-label={`${rating} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon
            key={i}
            name="star"
            size={size}
            strokeWidth={0}
            color={i < full ? 'var(--star-500)' : 'var(--paper-300)'}
            style={{ fill: i < full ? 'var(--star-500)' : 'var(--paper-300)' }}
          />
        ))}
      </span>
      {showValue || count ? (
        <span style={{ fontFamily: 'var(--font-figures)', fontVariantNumeric: 'tabular-nums', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          {showValue ? rating.toFixed(1) : null}
          {showValue && count ? ' · ' : null}
          {count ? `${count} Google reviews` : null}
        </span>
      ) : null}
    </div>
  );
}
