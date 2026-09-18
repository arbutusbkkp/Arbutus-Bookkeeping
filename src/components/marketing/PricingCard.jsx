import { Card } from '../core/Card.jsx';
import { Badge } from '../core/Badge.jsx';
import { CheckList } from '../core/CheckList.jsx';
import { Button } from '../core/Button.jsx';

/** One pricing tier. Prices are ranges, never fixed numbers. */
export function PricingCard({
  name,
  price,
  pricePrefix,
  cadence = '/ month',
  bestFor,
  features = [],
  badge,
  highlighted = false,
  ctaLabel = 'Book a call',
  ctaHref = '#contact',
  note,
  style,
  ...rest
}) {
  return (
    <Card
      {...rest}
      tone="paper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        borderColor: highlighted ? 'var(--green-600)' : 'var(--border-hairline)',
        borderWidth: highlighted ? 2 : 1,
        boxShadow: highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        ...style,
      }}
    >
      {badge ? (
        <span style={{ position: 'absolute', top: -13, left: 'var(--card-pad)' }}>
          <Badge tone="gold">{badge}</Badge>
        </span>
      ) : null}
      <div>
        <h3 style={{ margin: '0 0 var(--space-3)', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)' }}>
          {name}
        </h3>
        {pricePrefix ? <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 2 }}>{pricePrefix}</div> : null}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-figures)', fontVariantNumeric: 'tabular-nums', fontSize: '1.75rem', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>
            {price}
          </span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{cadence}</span>
        </div>
        {bestFor ? <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{bestFor}</p> : null}
      </div>
      <CheckList items={features} size="sm" />
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Button href={ctaHref} variant={highlighted ? 'primary' : 'secondary'} fullWidth>
          {ctaLabel}
        </Button>
        {note ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', textAlign: 'center' }}>{note}</span> : null}
      </div>
    </Card>
  );
}
