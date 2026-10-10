import { projects } from "../content";

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-title"
      className="projects-section"
      id="projetos"
    >
      <div className="section-kicker section-kicker-light">
        <span>02</span>
        <span className="kicker-rule" />
        Projetos e estudos de caso
      </div>
      <div className="section-heading-row">
        <h2 className="display-heading" id="projects-title">
          Soluções desenhadas para contextos reais.
        </h2>
        <p>
          Os espaços abaixo são placeholders editáveis para apresentar desafios,
          soluções e aprendizados de cada projeto, sem antecipar informações ou
          resultados não fornecidos.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span>CASE {project.number} · PLACEHOLDER</span>
              <span aria-hidden="true" className="project-card-arrow">
                ↗
              </span>
            </div>
            <h3>{project.title}</h3>
            <dl className="project-details">
              <div>
                <dt>Desafio</dt>
                <dd>{project.challenge}</dd>
              </div>
              <div>
                <dt>Solução</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>{project.result}</dd>
              </div>
            </dl>
            <div aria-hidden="true" className="project-card-orbit">
              <span />
              <span />
              <span />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
