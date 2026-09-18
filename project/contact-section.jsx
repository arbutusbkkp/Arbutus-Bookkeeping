const SERVICE_OPTIONS = ['Monthly bookkeeping', 'Cleanup & catch-up', 'Sales tax filing', 'Not sure yet'];

function ServiceSelect({ value, onChange }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <label htmlFor="svc" style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-body)' }}>What do you need?</label>
      <select
        id="svc" value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          height: 'var(--control-h)', padding: '0 var(--space-4)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
          color: 'var(--text-body)', background: 'var(--field-bg)', appearance: 'none',
          border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--field-border)'}`, borderRadius: 'var(--radius-sm)',
          boxShadow: focus ? 'var(--focus-ring)' : 'none', outline: 'none', transition: 'var(--transition-control)',
        }}
      >
        {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', business: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Tell me what&rsquo;s going on with your books" lede="Call, email, or send the form — whichever is easiest. I reply personally, usually within one business day." />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.75fr) minmax(0,1.25fr)', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }} className="ab-split">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gutter)' }}>
          <Card tone="paper">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none', color: 'var(--text-body)' }}>
                <Icon name="phone" size={18} color="var(--action-primary)" />
                <span><span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Phone</span><span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>{BRAND.phone}</span></span>
              </a>
              <a href={`mailto:${BRAND.email}`} style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none', color: 'var(--text-body)' }}>
                <Icon name="mail" size={18} color="var(--action-primary)" />
                <span><span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Email</span><span style={{ fontSize: 'var(--text-base)', fontWeight: 500, wordBreak: 'break-all' }}>{BRAND.email}</span></span>
              </a>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="map-pin" size={18} color="var(--action-primary)" />
                <span><span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Service area</span><span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>{BRAND.area}</span></span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="clock" size={18} color="var(--action-primary)" />
                <span><span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Hours</span><span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>{BRAND.hours}</span></span>
              </div>
            </div>
          </Card>
          <Card tone="tint">
            <h3 style={{ margin: '0 0 8px', fontSize: 'var(--text-h4)', fontFamily: 'var(--font-body)' }}>What happens next</h3>
            <CheckList size="sm" items={['A reply within one business day', 'A 20-minute call, no pitch', 'A written quote after I see the file']} />
          </Card>
        </div>
        <Card tone="paper">
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <Icon name="check-circle" size={34} color="var(--success-600)" />
              <h3 style={{ margin: 0, fontSize: 'var(--text-h3)' }}>Thanks — that&rsquo;s with me</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>I&rsquo;ll read it today and come back with two questions and a couple of times to talk. If it&rsquo;s urgent, call {BRAND.phone}.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="ab-2up">
                <Input label="Your name" value={form.name} onChange={set('name')} placeholder="Jordan Lee" required />
                <Input label="Business name" value={form.business} onChange={set('business')} placeholder="Lee Contracting Ltd." />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="ab-2up">
                <Input label="Email" type="email" value={form.email} onChange={set('email')} placeholder="you@business.ca" required />
                <Input label="Phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="(604) 555-0142" hint="Optional" />
              </div>
              <ServiceSelect value={form.service} onChange={set('service')} />
              <Input label="Anything I should know?" multiline rows={5} value={form.message} onChange={set('message')} placeholder="Two years behind in QuickBooks and a GST deadline in March…" hint="A sentence or two is plenty." />
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button type="submit">Send it over</Button>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>No newsletter, no drip sequence — just a reply from me.</span>
              </div>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}

Object.assign(window, { Contact, ServiceSelect });
