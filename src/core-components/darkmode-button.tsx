// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "../core-components/darkmode-button.scss";

export interface darkmodeButtonProps {
  className?: string;
}

export const DarkModeButton = (className: darkmodeButtonProps) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <button
      className={`darkmode-button ${className ? className : ``}`}
      onClick={toggleTheme}
    >
      {/* <FontAwesomeIcon
        icon={theme === true ? faMoon : faSun}
        className="darkmode-button__icon"
      /> */}
    </button>
  );
};
