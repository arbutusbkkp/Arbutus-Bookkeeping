import { Icon } from './Icon.jsx';

/** Gold checkmark list. The system's only bullet style for inclusions and benefits. */
export function CheckList({ items, icon = 'check', size = 'md', color = 'var(--mark-check)', style, ...rest }) {
  const fs = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  return (
    <ul
      {...rest}
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: size === 'sm' ? 'var(--space-2)' : 'var(--space-3)',
        ...style,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            alignItems: 'flex-start',
            margin: 0,
            fontSize: fs,
            lineHeight: 'var(--leading-body)',
            color: 'var(--text-body)',
          }}
        >
          <span style={{ marginTop: size === 'sm' ? 3 : 4 }}>
            <Icon name={icon} size={size === 'sm' ? 15 : 17} strokeWidth={2.25} color={color} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
