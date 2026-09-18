import { useState } from 'react';
import { Icon } from './Icon.jsx';

/** Round icon-only control: social marks in the footer, menu toggle on mobile. */
export function IconButton({ icon, label, href, variant = 'outline', size = 40, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? 'a' : 'button';
  const skins = {
    outline: { background: hover ? 'var(--green-100)' : 'transparent', borderColor: 'var(--border-strong)', color: 'var(--green-700)' },
    solid: { background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', borderColor: 'transparent', color: 'var(--text-on-accent)' },
    inverse: { background: hover ? 'rgba(250,246,240,.14)' : 'transparent', borderColor: 'var(--border-inverse)', color: 'var(--paper-050)' },
  };
  return (
    <Tag
      {...rest}
      href={href}
      onClick={onClick}
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-pill)',
        borderStyle: 'solid',
        borderWidth: 1,
        cursor: 'pointer',
        padding: 0,
        transition: 'var(--transition-control)',
        ...skins[variant],
        ...style,
      }}
    >
      <Icon name={icon} size={Math.round(size * 0.45)} />
    </Tag>
  );
}
