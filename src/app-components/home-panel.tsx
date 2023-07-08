import Coding from "../assets/page-decorations/Coding.svg";
import "./home-panel.scss";

export const HomePanel = () => {
  return (
    <section className="homepanel">
      <div className="homepanel__container">
        <div className="homepanel__title-container">
          <h1 className="homepanel__title-container__title">Bienvenido!👋</h1>
          <h2 className="homepanel__title-container__subtitle">
            Soy <b>Leonel Redigonda</b>
          </h2>
          <h3 className="homepanel__title-container__info">
            Desarrollador <b>Front End</b>
          </h3>
        </div>
        <div className="homepanel__image-container">
          <img src={Coding} className="homepanel__image" />
        </div>
      </div>
    </section>
  );
};
