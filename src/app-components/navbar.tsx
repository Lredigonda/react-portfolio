import { useState } from "react";

import forkIcon from "../assets/icons/code-fork.svg";
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
        <NavbarButton url="/">
          <h2 className="navbar__title">LR.</h2>
        </NavbarButton>

        <nav className="navbar__container__buttons">
          <NavbarButton text="Sobre mi" url="/about" />

          <NavbarButton text="Proyectos" url="/projects" />

          <NavbarButton text="Curriculum" url="/curriculum" />

          <NavbarButton
            url="https://github.com/Lredigonda/Portfolio"
            icon={forkIcon}
            className="repository-button"
            external
          />
        </nav>
      </div>
    </header>
  );
};
