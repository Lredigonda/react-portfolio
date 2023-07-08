import LinkComponent from "../core-components/link-component";
import "./social-media.scss";

import { SocialMediaData, SocialMediaDataProps } from "./utils";

interface SocialMediaProps {
  haveTitle?: boolean;
  theme?: "dark" | "light";
  size: "S" | "M" | "L";
}

export const SocialMedia = ({
  haveTitle,
  size = "M",
  theme = "light",
}: SocialMediaProps) => {
  return (
    <div className="social-media">
      {haveTitle ? (
        <h1 className="social-media__title">
          Puedes contactarme en mis <b>Redes</b>
        </h1>
      ) : null}

      <div className={`social-media__buttons size-${size}`}>
        {SocialMediaData.map(({ name, url }: SocialMediaDataProps) => {
          return (
            <div key={name} className={`social-media__buttons-${name}`}>
              <LinkComponent url={url} isExternal>
                <img
                  className={`social-media__images ${theme}`}
                  src={`${window.location.origin}/social-media-logos/${name}.svg`}
                />
              </LinkComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};
