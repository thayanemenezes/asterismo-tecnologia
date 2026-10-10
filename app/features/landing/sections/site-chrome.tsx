function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      fill="none"
      viewBox="0 0 42 42"
    >
      <path
        d="M21 3.5v35M3.5 21h35M8.63 8.63l24.74 24.74m0-24.74L8.63 33.37"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <circle cx="21" cy="21" r="4.25" fill="currentColor" />
      <circle cx="21" cy="3.5" r="2.25" fill="currentColor" />
      <circle cx="38.5" cy="21" r="2.25" fill="currentColor" />
      <circle cx="21" cy="38.5" r="2.25" fill="currentColor" />
      <circle cx="3.5" cy="21" r="2.25" fill="currentColor" />
    </svg>
  );
}

const navigation = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="items">
      <a className="brand" href="#inicio" aria-label="Asterismo Tecnologia, início">
        <BrandMark />
        <span className="brand-wordmark">
          <span>Asterismo</span>
          <span className="brand-subtitle">Tecnologia</span>
        </span>
      </a>
      <nav aria-label="Navegação principal" className="primary-navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a className="navigation-cta" href="#contato">
          Fale conosco <span aria-hidden="true">↗</span>
        </a>
      </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#inicio">
        <BrandMark />
        <span className="brand-wordmark">
          <span>Asterismo</span>
          <span className="brand-subtitle">Tecnologia</span>
        </span>
      </a>
      <p>Elementos diferentes. Um sistema com propósito.</p>
      <nav aria-label="Navegação do rodapé" className="footer-navigation">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
      <span className="copyright">
        © {new Date().getFullYear()} Asterismo Tecnologia
      </span>
    </footer>
  );
}
