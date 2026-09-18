/**
 * Type-set wordmark. No logo files were supplied with the brief, so the brand mark
 * IS this typographic lockup — do not substitute a drawn symbol.
 */
export function Wordmark({ tone = 'dark', size = 22, showTagline = false, href, logoSrc, markOnly = false, style, ...rest }) {
  const colors =
    tone === 'light'
      ? { name: 'var(--paper-050)', second: 'var(--green-300)', rule: 'var(--gold-400)' }
      : { name: 'var(--green-700)', second: 'var(--ink-500)', rule: 'var(--gold-500)' };
  const Tag = href ? 'a' : 'span';
  const mark = logoSrc ? <img src={logoSrc} alt="Arbutus Bookkeeping" style={{ height: size * 2, width: 'auto', display: 'block' }} /> : null;

  if (markOnly && mark) {
    return (
      <Tag {...rest} href={href} style={{ display: 'inline-flex', ...style }}>
        {mark}
      </Tag>
    );
  }

  return (
    <Tag {...rest} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.42, textDecoration: 'none', lineHeight: 1, ...style }}>
      {mark}
      <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.34em' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: size, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.015em', color: colors.name }}>
            Arbutus
          </span>
          <span style={{ width: size * 0.5, height: 2, background: colors.rule, alignSelf: 'center', flex: '0 0 auto' }} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: size * 0.5,
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              color: colors.second,
            }}
          >
            Bookkeeping
          </span>
        </span>
        {showTagline ? (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: size * 0.42, color: colors.second, letterSpacing: '0.02em' }}>
            Clean books. Clear numbers. Real answers.
          </span>
        ) : null}
      </span>
    </Tag>
  );
}
