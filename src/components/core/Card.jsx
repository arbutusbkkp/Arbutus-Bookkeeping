import { useState } from 'react';

const TONES = {
  paper: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
  tint: { background: 'var(--surface-card-tint)', border: '1px solid var(--green-200)', color: 'var(--text-body)' },
  inverse: { background: 'var(--surface-inverse)', border: '1px solid var(--border-inverse)', color: 'var(--text-on-inverse)' },
  accent: { background: 'var(--surface-accent-soft)', border: '1px solid var(--gold-200)', color: 'var(--text-body)' },
};

/** Paper panel: hairline border, 14px radius, shadow only on hover for clickable cards. */
export function Card({ children, tone = 'paper', interactive = false, padding, as = 'div', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...rest}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: padding || 'var(--card-pad)',
        boxShadow: interactive && hover ? 'var(--shadow-lift-hover)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'var(--transition-control)',
        ...TONES[tone],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
