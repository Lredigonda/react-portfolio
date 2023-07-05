// import { Card } from "../core-components/card";
import "./skills.scss";
// import { ReactComponent as Html } from "../assets/svg-logos/html.svg";
// import { ReactComponent as Css } from "../assets/svg-logos/css3.svg";
// import { ReactComponent as Sass } from "../assets/svg-logos/sass.svg";
// import { ReactComponent as Jscript } from "../assets/svg-logos/javascript.svg";
// import { ReactComponent as Reacct } from "../assets/svg-logos/react.svg";
// import { ReactComponent as Tscript } from "../assets/svg-logos/typescript.svg";
// import { ReactComponent as Git } from "../assets/svg-logos/git.svg";
// import { ReactComponent as Linux } from "../assets/svg-logos/linux.svg";
// import { ReactComponent as VisualSC } from "../assets/svg-logos/visual-studio-code.svg";
// import { ReactComponent as GitHub } from "../assets/svg-logos/github.svg";

function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h1 className="skills__container__title">
          Mis <b>conocimientos</b>
        </h1>
        <div className="skills__container__lang">
          {/* <Card className="skills__language">
            <Html />
          </Card>
          <Card className="skills__language">
            <Css />
          </Card>
          <Card className="skills__language">
            <Sass />
          </Card>
          <Card className="skills__language">
            <Jscript />
          </Card>
          <Card className="skills__language">
            <Reacct />
          </Card>
          <Card className="skills__language">
            <Tscript />
          </Card>
          <Card className="skills__language">
            <Git />
          </Card> */}
        </div>
      </div>
      <div className="skills__container">
        <h1 className="skills__container__title">
          <b>Herramientas</b> que utilizo
        </h1>
        <div className="skills__container__tools">
          {/* <Card className="skills__tools">
            <Linux />
          </Card>
          <Card className="skills__tools">
            <VisualSC />
          </Card>
          <Card className="skills__tools">
            <GitHub />
          </Card> */}
        </div>
      </div>
    </section>
  );
}
export default Skills;
