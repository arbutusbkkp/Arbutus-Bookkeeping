import { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 16px', fontSize: 'var(--text-sm)' },
  md: { height: 'var(--control-h)', padding: '0 22px', fontSize: 'var(--text-base)' },
  lg: { height: '56px', padding: '0 28px', fontSize: 'var(--text-lead)' },
};

function skin(variant, hover, active) {
  if (variant === 'primary')
    return {
      background: active ? 'var(--action-primary-active)' : hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    };
  if (variant === 'secondary')
    return {
      background: hover ? 'var(--green-100)' : 'transparent',
      color: 'var(--action-secondary)',
      border: '1px solid var(--green-600)',
      boxShadow: 'none',
    };
  if (variant === 'inverse')
    return {
      background: hover ? 'var(--paper-050)' : 'var(--paper-000)',
      color: 'var(--green-800)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    };
  return {
    background: 'transparent',
    color: hover ? 'var(--text-link-hover)' : 'var(--text-link)',
    border: '1px solid transparent',
    boxShadow: 'none',
  };
}

/** Primary call-to-action control. Two weights carry the site: filled gold, outlined evergreen. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const Tag = href && !disabled ? 'a' : 'button';
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control)',
    transform: active && !disabled ? 'scale(var(--press-scale))' : 'none',
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
    ...skin(variant, hover && !disabled, active && !disabled),
    ...style,
  };
  const glyph = icon ? <Icon name={icon} size={size === 'sm' ? 15 : 17} /> : null;
  return (
    <Tag
      {...rest}
      type={Tag === 'button' ? type : undefined}
      href={href}
      style={css}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {iconPosition === 'left' ? glyph : null}
      <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
      {iconPosition === 'right' ? glyph : null}
    </Tag>
  );
}
