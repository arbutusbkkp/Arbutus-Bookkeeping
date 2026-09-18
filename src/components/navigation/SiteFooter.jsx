import { Wordmark } from '../brand/Wordmark.jsx';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

/** Evergreen footer: wordmark + contact, repeated nav, social marks, copyright. */
export function SiteFooter({
  nav = [],
  phone = '(778) 870-2340',
  email = 'arbutusbkkp@gmail.com',
  logoSrc,
  socials = [],
  onNavigate,
  note = 'Tax-ready books for small businesses across the Greater Vancouver Area.',
  style,
  ...rest
}) {
  const go = (item) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
  };
  const link = { fontSize: 'var(--text-sm)', color: 'var(--text-on-inverse-muted)', textDecoration: 'none' };
  return (
    <footer {...rest} style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', padding: 'var(--space-16) var(--container-pad) var(--space-8)', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(260px,1.4fr) repeat(2,minmax(140px,1fr))', gap: 'var(--space-12)' }} className="ab-foot">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Wordmark tone="light" size={22} logoSrc={logoSrc} />
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-on-inverse-muted)', maxWidth: '34ch' }}>{note}</p>
          {socials.length ? (
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {socials.map((s) => (
                <IconButton key={s.label} icon={s.icon} label={s.label} href={s.href} variant="inverse" size={38} />
              ))}
            </div>
          ) : null}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--green-400)' }}>Pages</span>
          {nav.map((item) => (
            <a key={item.label} href={item.href} onClick={go(item)} style={link}>
              {item.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--green-400)' }}>Get in touch</span>
          <a href={`tel:${phone.replace(/\D/g, '')}`} style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="phone" size={14} />
            {phone}
          </a>
          <a href={`mailto:${email}`} style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="mail" size={14} />
            {email}
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: 'var(--space-12) auto 0',
          paddingTop: 'var(--space-5)',
          borderTop: '1px solid var(--border-inverse)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--green-400)' }}>© {new Date().getFullYear()} Arbutus Bookkeeping</span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--green-400)' }}>CPA · Certified QuickBooks ProAdvisor</span>
      </div>
      <style>{'@media (max-width:760px){.ab-foot{grid-template-columns:1fr!important;gap:var(--space-8)!important}}'}</style>
    </footer>
  );
}
