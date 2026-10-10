export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true" className="eyebrow-dot" />
          Asterismo Tecnologia <span aria-hidden="true">·</span> sistemas
          conectados
        </p>
        <h1 id="hero-title">
          Tecnologia que conecta.
          <br />
          <span>Soluções que evoluem.</span>
        </h1>
        <p className="hero-description">
          Conectamos código, dados, ideias e processos para transformar desafios
          em sistemas digitais úteis, consistentes e preparados para evoluir.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#sobre">
            Conheça a Asterismo <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-text" href="#contato">
            Fale conosco <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-note">
          <span aria-hidden="true" className="hero-note-line" />
          <span>Ideias conectadas. Tecnologia com intenção.</span>
        </div>
      </div>
      <div aria-hidden="true" className="hero-visual">
        <div className="hero-light" />
        <svg className="hero-asterism" fill="none" viewBox="0 0 400 300">
          <path d="M130 88 58 150l72 62M270 88l72 62-72 62M218 63l-36 174" />
          <circle cx="130" cy="88" r="3.5" />
          <circle cx="58" cy="150" r="3.5" />
          <circle cx="130" cy="212" r="3.5" />
          <circle cx="270" cy="88" r="3.5" />
          <circle cx="342" cy="150" r="3.5" />
          <circle cx="270" cy="212" r="3.5" />
          <circle cx="218" cy="63" r="3.5" />
          <circle cx="182" cy="237" r="3.5" />
          <circle className="asterism-core" cx="200" cy="150" r="4.5" />
        </svg>
      </div>
    </section>
  );
}
