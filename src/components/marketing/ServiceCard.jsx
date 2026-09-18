import { Card } from '../core/Card.jsx';
import { Icon } from '../core/Icon.jsx';
import { CheckList } from '../core/CheckList.jsx';

/** One of the 3-up service offerings: icon, name, short description, inclusions. */
export function ServiceCard({ icon = 'receipt', title, description, items = [], footnote, href, style, ...rest }) {
  return (
    <Card
      {...rest}
      interactive={Boolean(href)}
      as={href ? 'a' : 'div'}
      href={href}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', textDecoration: 'none', height: '100%', boxSizing: 'border-box', ...style }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card-tint)',
          color: 'var(--green-700)',
        }}
      >
        <Icon name={icon} size={21} />
      </span>
      <div>
        <h3 style={{ margin: '0 0 var(--space-2)', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)' }}>
          {title}
        </h3>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-body)' }}>{description}</p>
      </div>
      {items.length ? <CheckList items={items} size="sm" style={{ marginTop: 'auto' }} /> : null}
      {footnote ? <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{footnote}</p> : null}
    </Card>
  );
}
