import "./about-me.scss";

export const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-me__image-container">
        <div className="about-me__image"></div>
      </div>
      <div className="about-me__info-container">
        <h2 className="about-me__title">
          Un poco <b>sobre mi</b>
        </h2>
        <p className="about-me__info-1">
          Soy desarrollador <b>FrontEnd</b> con conocimientos basicos de
          BackEnd.
          <br />
          Tengo conocimientos en <b>maquetacion</b> y <b>Javascript</b>, junto
          con algunas de sus <b>librerias</b>.
        </p>

        <p className="about-me__info-2">
          Me interesa el desarrollo de aplicaciones web, mantenerme en constante{" "}
          <b>aprendizaje</b> y aquirir conocimiento en nuevas tecnologias.
        </p>
      </div>
    </section>
  );
};
