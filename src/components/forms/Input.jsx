import { useState } from 'react';

/** Labelled text field. One visual weight across contact forms and email capture. */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  hint,
  error,
  multiline = false,
  rows = 4,
  value,
  onChange,
  required = false,
  tone = 'light',
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || `f-${label ? label.toLowerCase().replace(/\W+/g, '-') : type}`;
  const onDark = tone === 'inverse';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    minHeight: multiline ? undefined : 'var(--control-h)',
    padding: multiline ? 'var(--space-3) var(--space-4)' : '0 var(--space-4)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    lineHeight: multiline ? 'var(--leading-body)' : 'var(--control-h)',
    color: 'var(--text-body)',
    background: 'var(--field-bg)',
    border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-focus)' : 'var(--field-border)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'var(--transition-control)',
    resize: multiline ? 'vertical' : undefined,
  };
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label ? (
        <label htmlFor={inputId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)' }}>
          {label}
          {required ? <span style={{ color: 'var(--gold-500)' }}> *</span> : null}
        </label>
      ) : null}
      <Tag
        {...rest}
        id={inputId}
        type={multiline ? undefined : type}
        rows={multiline ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={field}
      />
      {error || hint ? (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--danger-600)' : onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      ) : null}
    </div>
  );
}
