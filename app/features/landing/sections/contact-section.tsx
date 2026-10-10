const contactChannels = [
  { label: "E-mail", value: "[seu-email@dominio.com]" },
  { label: "Telefone", value: "[adicione um telefone]" },
  { label: "LinkedIn", value: "[adicione o perfil ou página]" },
] as const;

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section"
      id="contato"
    >
      <div className="contact-intro">
        <div className="section-kicker">
          <span>05</span>
          <span className="kicker-rule" />
          Inicie uma conversa
        </div>
        <h2 className="display-heading" id="contact-title">
          Seu próximo sistema pode começar por aqui.
        </h2>
        <p>
          Conte um pouco sobre o desafio que você quer conectar, automatizar ou
          transformar. Os canais abaixo são placeholders editáveis.
        </p>
        <dl className="contact-channels">
          {contactChannels.map((channel) => (
            <div key={channel.label}>
              <dt>{channel.label}</dt>
              <dd>{channel.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <form
        action="mailto:seu-email@dominio.com"
        className="contact-form"
        encType="text/plain"
        method="post"
      >
        <div className="form-field">
          <label htmlFor="contact-name">Nome</label>
          <input autoComplete="name" id="contact-name" name="Nome" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">E-mail</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="E-mail"
            required
            type="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-company">Empresa ou contexto</label>
          <input
            autoComplete="organization"
            id="contact-company"
            name="Empresa ou contexto"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            name="Mensagem"
            placeholder="Conte brevemente o que você precisa conectar ou evoluir."
            required
            rows={4}
          />
        </div>
        <button className="button button-primary form-submit" type="submit">
          Iniciar conversa <span aria-hidden="true">↗</span>
        </button>
        <p className="form-note">
          O formulário abre o aplicativo de e-mail configurado neste
          dispositivo. Atualize o endereço de destino antes de publicar.
        </p>
      </form>
    </section>
  );
}
