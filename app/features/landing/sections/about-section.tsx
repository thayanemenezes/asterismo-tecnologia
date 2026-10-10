export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="about-section" id="sobre">
      <div className="section-kicker">
        <span>01</span>
        <span className="kicker-rule" />
        O que nos orienta
      </div>
      <div className="about-intro">
        <h2 className="display-heading" id="about-title">
          Um asterismo reúne pontos distintos em uma mesma leitura.
        </h2>
        <div className="about-copy">
          <p>
            Na astronomia, um asterismo é um desenho percebido entre estrelas.
            Na Asterismo, esse olhar inspira a criação de sistemas digitais que
            conectam partes diferentes e revelam novas possibilidades.
          </p>
          <p>
            Engenharia de software, automação, inteligência artificial e
            integrações deixam de atuar de forma isolada para formar estruturas
            claras, úteis e prontas para acompanhar a evolução do negócio.
          </p>
        </div>
      </div>
      {/* <div className="founder-card">
        <div className="founder-image-wrap">
          <img
            alt="Imagem ilustrativa de uma pessoa trabalhando com tecnologia"
            className="founder-image"
            height="650"
            loading="lazy"
            src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width="960"
          />
          <span className="image-caption">Uma visão com direção humana</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow eyebrow-dark">Quem conduz a visão</p>
          <h3>Uma construção com direção humana.</h3>
          <p className="founder-name">Thayane Nascimento</p>
          <p className="founder-role">Fundadora <span>·</span> Full Stack Engineer</p>
          <p className="founder-bio">
            Este é um espaço editável para apresentar a visão, trajetória e
            atuação da fundadora. Inclua aqui uma breve biografia alinhada ao
            propósito de conectar tecnologia, processos e possibilidades de
            evolução.
          </p>
          <span className="editable-tag">
            <span aria-hidden="true">✳</span> Conteúdo editável
          </span>
        </div>
      </div> */}
    </section>
  );
}
