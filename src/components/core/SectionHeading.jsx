/** Eyebrow + heading + optional lede, used to open every page section. */
export function SectionHeading({ eyebrow, title, lede, align = 'left', level = 2, maxWidth = 'var(--measure-body)', style, ...rest }) {
  const H = `h${level}`;
  return (
    <header
      {...rest}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        marginBottom: 'var(--space-10)',
        ...style,
      }}
    >
      {eyebrow ? (
        <span
          style={{
            fontSize: 'var(--text-eyebrow)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--gold-600)',
          }}
        >
          {eyebrow}
        </span>
      ) : null}
      <H
        style={{
          margin: 0,
          fontFamily: 'var(--font-heading)',
          fontSize: level === 1 ? 'var(--text-h1)' : 'var(--text-h2)',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-display)',
          lineHeight: 'var(--leading-snug)',
          color: 'var(--text-heading)',
          maxWidth: 'var(--measure-wide)',
        }}
      >
        {title}
      </H>
      {lede ? (
        <p style={{ margin: 0, fontSize: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth, lineHeight: 'var(--leading-body)' }}>{lede}</p>
      ) : null}
    </header>
  );
}
