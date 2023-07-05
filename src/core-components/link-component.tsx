import { Link } from "react-router-dom";
import "./link-component.scss";

interface LinkComponentProps {
  url: string;
  text?: string;
  children?: JSX.Element;
  elipsis?: boolean;
  className?: string;
  isExternal?: boolean;
}

export const LinkComponent = ({
  url,
  text,
  children,
  elipsis,
  className,
  isExternal,
}: LinkComponentProps) => {
  return isExternal ? (
    <a
      className={`link ${elipsis ? "elipsis" : ""} ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      {text}
    </a>
  ) : (
    <Link className={`link ${elipsis ? "elipsis" : ""} ${className}`} to={url}>
      {children}
      {text}
    </Link>
  );
};

export default LinkComponent;
