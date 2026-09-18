/** Full-bleed evergreen band that closes a page: headline, one line of copy, one action. */
export function CTABanner({ title, body, children, align = 'left', style, ...rest }) {
  return (
    <section {...rest} style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', padding: 'var(--section-y) var(--container-pad)', ...style }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          textAlign: align,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-display)',
            lineHeight: 'var(--leading-snug)',
            color: 'var(--paper-050)',
            maxWidth: '24ch',
          }}
        >
          {title}
        </h2>
        {body ? <p style={{ margin: 0, fontSize: 'var(--text-lead)', color: 'var(--text-on-inverse-muted)', maxWidth: 'var(--measure-body)' }}>{body}</p> : null}
        {children}
      </div>
    </section>
  );
}
