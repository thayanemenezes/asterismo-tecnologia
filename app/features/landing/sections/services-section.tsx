import { services } from "../content";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-title"
      className="services-section"
      id="servicos"
    >
      <div className="section-kicker">
        <span>03</span>
        <span className="kicker-rule" />
        O que conectamos
      </div>
      <div className="section-heading-row">
        <h2 className="display-heading" id="services-title">
          Tecnologia aplicada com intenção.
        </h2>
        <p>
          Atuação modular para construir, integrar e evoluir soluções digitais
          de acordo com a necessidade de cada contexto.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <span aria-hidden="true" className="service-cross">
              +
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
