import { useState } from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';

/** Sticky site header: wordmark left, nav centre-right, tap-to-call phone, CTA. */
export function SiteHeader({ nav = [], active, onNavigate, phone = '(778) 870-2340', ctaLabel = 'Book a free call', ctaHref = '#contact', logoSrc, style, ...rest }) {
  const [open, setOpen] = useState(false);
  const go = (item) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
    setOpen(false);
  };
  return (
    <header
      {...rest}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'color-mix(in srgb, var(--surface-page) 92%, transparent)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-hairline)',
        ...style,
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-4) var(--container-pad)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <Wordmark href="#top" size={20} logoSrc={logoSrc} onClick={onNavigate ? go(nav[0]) : undefined} />
        <nav style={{ display: 'flex', gap: 'var(--space-5)', marginLeft: 'auto' }} className="ab-nav">
          {nav.map((item) => {
            const isActive = active === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={go(item)}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-medium)',
                  textDecoration: 'none',
                  color: isActive ? 'var(--green-700)' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  paddingBottom: 2,
                  borderBottom: `2px solid ${isActive ? 'var(--gold-500)' : 'transparent'}`,
                  transition: 'var(--transition-control)',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', textDecoration: 'none', color: 'var(--green-700)', whiteSpace: 'nowrap' }}
          className="ab-phone"
        >
          <Icon name="phone" size={15} />
          {phone}
        </a>
        <span className="ab-cta">
          <Button href={ctaHref} size="sm">
            {ctaLabel}
          </Button>
        </span>
        <span className="ab-burger" style={{ display: 'none' }}>
          <IconButton icon={open ? 'x' : 'menu'} label="Menu" size={44} onClick={() => setOpen((v) => !v)} />
        </span>
      </div>
      {open ? (
        <div style={{ borderTop: '1px solid var(--border-hairline)', padding: 'var(--space-4) var(--container-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', background: 'var(--surface-page)' }}>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={go(item)}
              style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', textDecoration: 'none', color: active === item.label ? 'var(--green-700)' : 'var(--text-muted)' }}
            >
              {item.label}
            </a>
          ))}
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      ) : null}
      <style>{'@media (max-width:1010px){.ab-nav,.ab-phone,.ab-cta{display:none!important}.ab-burger{display:inline-flex!important;margin-left:auto}}'}</style>
    </header>
  );
}
