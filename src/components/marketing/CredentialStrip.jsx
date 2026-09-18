import { Icon } from '../core/Icon.jsx';

/**
 * Credential row above the footer. No partner logo files were supplied with the brief,
 * so credentials render as glyph + text lockups, not vendor artwork.
 */
export function CredentialStrip({ items = [], link, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-8)',
        flexWrap: 'wrap',
        padding: 'var(--space-6) 0',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
        ...style,
      }}
    >
      {items.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)' }}>
          <Icon name={item.icon || 'badge-check'} size={19} color="var(--green-600)" />
          {item.label}
        </span>
      ))}
      {link ? (
        <a href={link.href} style={{ marginLeft: 'auto', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {link.label}
          <Icon name="arrow-right" size={15} />
        </a>
      ) : null}
    </div>
  );
}
