import { processSteps } from "../content";

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-title"
      className="process-section"
      id="processo"
    >
      <div className="section-kicker section-kicker-light">
        <span>04</span>
        <span className="kicker-rule" />
        Método de trabalho
      </div>
      <div className="process-heading">
        <h2 className="display-heading" id="process-title">
          Do ponto de partida à evolução contínua.
        </h2>
        <p>
          Um processo claro para transformar necessidades em soluções
          conectadas, com espaço para aprender e evoluir a cada etapa.
        </p>
      </div>
      <ol className="process-list">
        {processSteps.map((step) => (
          <li className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <span aria-hidden="true" className="process-arrow">
              ↗
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
