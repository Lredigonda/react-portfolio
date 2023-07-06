// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./navbar-button.scss";

export interface navbarButtonProps {
  className?: string;
  text?: string;
  url: string;
  children?: JSX.Element;
  icon?: string;
  external?: boolean;
}

export const NavbarButton = ({
  text,
  url,
  children,
  className,
  icon,
  external,
}: navbarButtonProps) => {
  return (
    <div className="navbarbutton">
      {external ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={`${url}`}
          className={`navbarbutton__link ${className ? className : ""}`}
        >
          {children}
          {icon ? (
            <img src={icon} className="navbarbutton__link__icon" />
          ) : null}
          {text}
        </a>
      ) : (
        <Link
          rel="noreferrer"
          to={`${url}`}
          className={`navbarbutton__link ${className ? className : ""}`}
        >
          {children}
          {icon ? <img src={icon} /> : null}
          {text}
        </Link>
      )}
    </div>
  );
};
