import { useState } from 'react';
import { Input } from './Input.jsx';
import { Button } from '../core/Button.jsx';

/** Single-field email capture used in the secondary CTA banner. */
export function EmailCaptureForm({ placeholder = 'you@business.ca', buttonLabel = 'Send it over', tone = 'inverse', note, onSubmit, style, ...rest }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    if (onSubmit) onSubmit(email);
  };
  const onDark = tone === 'inverse';
  return (
    <form {...rest} onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 520, ...style }}>
      {sent ? (
        <p style={{ margin: 0, color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)', fontSize: 'var(--text-base)' }}>
          Got it — I&rsquo;ll be in touch within one business day.
        </p>
      ) : (
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Input
            type="email"
            tone={tone}
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ flex: '1 1 240px' }}
          />
          <Button type="submit" variant={onDark ? 'inverse' : 'primary'}>
            {buttonLabel}
          </Button>
        </div>
      )}
      {note ? <span style={{ fontSize: 'var(--text-xs)', color: onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{note}</span> : null}
    </form>
  );
}
