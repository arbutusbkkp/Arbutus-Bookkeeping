import { SiteHeader, SiteFooter, CredentialStrip } from './components/index.js';
import { Container } from './layout/Container.jsx';
import { BRAND, NAV, CREDENTIALS } from './content.js';
import { Hero } from './sections/Hero.jsx';
import { Services } from './sections/Services.jsx';
import { Pricing } from './sections/Pricing.jsx';
import { About } from './sections/About.jsx';
import { Closing } from './sections/Closing.jsx';
import { Contact } from './sections/Contact.jsx';

export function App() {
  return (
    <div>
      <SiteHeader nav={NAV} phone={BRAND.phone} ctaLabel="Book a free call" ctaHref="#contact" logoSrc={BRAND.logo} />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Closing />
        <Container style={{ background: 'var(--surface-page)' }}>
          <CredentialStrip items={CREDENTIALS} />
        </Container>
        <Contact />
      </main>
      <SiteFooter nav={NAV} phone={BRAND.phone} email={BRAND.email} logoSrc={BRAND.logoLight} />
    </div>
  );
}
