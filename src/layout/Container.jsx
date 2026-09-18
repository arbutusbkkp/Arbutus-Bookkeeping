export function Container({ children, narrow = false, style }) {
  return (
    <div style={{ maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', ...style }}>
      {children}
    </div>
  );
}
