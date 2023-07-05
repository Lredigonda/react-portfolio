import { useState } from "react";

import { NavbarButton } from "../core-components/navbar-button";
import "./navbar.scss";

export const Navbar = () => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 30) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <header className={`navbar ${navColour === true ? "sticky" : ""} `}>
      <div className="navbar__container">
        <NavbarButton url="/" className="navbar__container__home">
          <h2 className="navbar__container__home__title">LR.</h2>
        </NavbarButton>

        <nav className="navbar__container__buttons">
          <NavbarButton
            text="Sobre mi"
            url="/about"
            // icon={""}
            className="navbar__container__buttons__about"
          />

          <NavbarButton
            text="Proyectos"
            url="/projects"
            // icon={""}
            className="navbar__container__buttons__projects"
          />

          <NavbarButton
            text="Curriculum"
            url="/curriculum"
            // icon={faIdCard}
            className="navbar__container__buttons__contact"
          />

          <NavbarButton
            url="https://github.com/Lredigonda/Portfolio"
            // icon={faCodeBranch}
            className="navbar__container__buttons__repository"
            external
          />
        </nav>
      </div>
    </header>
  );
};
