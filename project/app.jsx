function Site() {
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

ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
lucide.createIcons();
