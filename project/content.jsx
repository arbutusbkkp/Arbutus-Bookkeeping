const { Button, Card, CheckList, Badge, Icon, SectionHeading,
  ServiceCard, PricingCard, CredentialStrip, CTABanner,
  Input, EmailCaptureForm, SiteHeader, SiteFooter, Wordmark } = window.ArbutusBookkeepingDesignSystem_5246cf;

const BRAND = {
  name: 'Arbutus Bookkeeping',
  person: 'Logan Shim, CPA',
  area: 'Greater Vancouver Area',
  phone: '(778) 870-2340',
  email: 'arbutusbkkp@gmail.com',
  hours: 'Mon–Fri, 10:00–5:00 PT',
  logo: 'assets/logo.png',
  logoLight: 'assets/logo-white.png',
  headshot: 'assets/logan-shim.png',
};

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: 'calendar-check', title: 'Monthly bookkeeping',
    description: 'Your books closed every month, reconciled and tax-ready, so you always know where the business stands.',
    items: ['Bank & credit cards reconciled monthly', 'P&L and balance sheet each month', 'Payables and receivables kept current', 'Year-end package for your accountant'],
    footnote: 'Best for owners who want to stop thinking about it.',
  },
  {
    icon: 'archive-restore', title: 'Cleanup & catch-up',
    description: 'Behind a quarter or behind three years — I rebuild the file and hand back books a CPA will sign off on.',
    items: ['Full transaction review and re-coding', 'Accounts rebuilt and reconciled', 'Prior-period corrections documented', 'Filing gaps identified and closed'],
    footnote: 'Best for backlogs, shoeboxes and CRA letters.',
  },
  {
    icon: 'receipt', title: 'Sales tax filing',
    description: 'GST and PST prepared, reviewed and filed on schedule, with the working papers behind every number.',
    items: ['GST/HST returns prepared and filed', 'PST registration', 'Input tax credits reviewed for misses', 'Deadline calendar you can see'],
    footnote: 'Best for anyone who dreads the filing window.',
  },
];

const TIERS = [
  {
    name: 'The Foundation', price: '$400', pricePrefix: 'Starting at', cadence: '/ month',
    bestFor: 'Sole proprietors with one account and no payroll.',
    features: ['Monthly reconciliation', 'P&L and balance sheet', 'Annual GST filing', 'Year-end package', 'Email support'],
    ctaLabel: 'Start here',
  },
  {
    name: 'The Growth', price: '$650', pricePrefix: 'Starting at', cadence: '/ month',
    bestFor: 'Incorporated businesses with steady volume and quarterly filings.',
    features: ['Everything in The Foundation', 'Invoice and bill tracking (AR/AP)', 'Quarterly performance summary', 'Priority support'],
    badge: 'Most popular', highlighted: true, ctaLabel: 'Book a free call',
  },
  {
    name: 'The Insight', price: '$999', pricePrefix: 'Starting at', cadence: '/ month',
    bestFor: 'Multi-entity, high-volume or inventory-heavy operations.',
    features: ['Everything in The Growth', 'Higher transaction volume and/or frequent sales tax reporting', 'Custom reports and KPI dashboards', 'Accrual accounting, payroll journal entries, and loan tracking'],
    ctaLabel: 'Ask about The Insight',
  },
];

const CREDENTIALS = [
  { icon: 'badge-check', label: 'CPA' },
  { icon: 'shield-check', label: 'Certified QuickBooks ProAdvisor' },
  { icon: 'graduation-cap', label: 'Simon Fraser University' },
  { icon: 'map-pin', label: 'Local to Greater Vancouver' },
];

function Container({ children, narrow = false, style }) {
  return <div style={{ maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', ...style }}>{children}</div>;
}

function Section({ children, tone = 'page', id, style }) {
  const bg = { page: 'var(--surface-page)', alt: 'var(--surface-alt)', card: 'var(--surface-card)' }[tone];
  return (
    <section id={id} style={{ background: bg, padding: 'var(--section-y) 0', scrollMarginTop: 80, ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

const CARD_GRID = { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--gutter)', alignItems: 'stretch' };

Object.assign(window, { BRAND, NAV, SERVICES, TIERS, CREDENTIALS, Container, Section, CARD_GRID,
  Button, Card, CheckList, Badge, Icon, SectionHeading, ServiceCard, PricingCard,
  CredentialStrip, CTABanner, Input, EmailCaptureForm, SiteHeader, SiteFooter, Wordmark });
