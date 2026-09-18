import { Icon } from './Icon.jsx';

const TONES = {
  accent: { background: 'var(--surface-accent)', color: 'var(--text-on-accent)', border: 'transparent' },
  gold: { background: 'var(--gold-500)', color: 'var(--green-900)', border: 'transparent' },
  soft: { background: 'var(--surface-accent-soft)', color: 'var(--gold-900)', border: 'transparent' },
  evergreen: { background: 'var(--green-200)', color: 'var(--green-800)', border: 'transparent' },
  outline: { background: 'transparent', color: 'var(--text-muted)', border: 'var(--border-strong)' },
};

/** Small pill label: "Most popular" on a pricing tier, "Remote across BC" in a hero. */
export function Badge({ children, tone = 'accent', icon, style, ...rest }) {
  const t = TONES[tone] || TONES.accent;
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        background: t.background,
        color: t.color,
        border: `1px solid ${t.border}`,
        borderRadius: 'var(--radius-pill)',
        padding: '5px 12px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-eyebrow)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
