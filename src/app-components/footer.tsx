import "./footer.scss";

import LinkComponent from "../core-components/link-component";
import { DarkModeButton } from "../core-components/darkmode-button";
import { Separator } from "../core-components/separator";

import TwitterLogo from "../assets/png-logos/iconmonstr-twitter-1-24.png";
import InstagramLogo from "../assets/png-logos/iconmonstr-instagram-11-24.png";
import FacebookLogo from "../assets/png-logos/iconmonstr-facebook-6-24.png";
import LinkedinLogo from "../assets/png-logos/iconmonstr-linkedin-1-24.png";
import GitHubLogo from "../assets/png-logos/iconmonstr-github-1-24.png";
import { TranslateButton } from "../core-components/translate-button";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <h2 className="footer__container__logo">LR.</h2>
            <h3 className="footer__container__title">
              Designed and Developed by <b>Leonel Redigonda</b>
            </h3>
          </div>
          <div className="footer__top__right">
            <LinkComponent
              className="footer__contact-button__instagram"
              url="https://www.instagram.com/leo.redigonda/"
              isExternal
            >
              <img src={InstagramLogo} alt="instagram-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button__twitter"
              url="https://twitter.com/LeoRedigonda"
              isExternal
            >
              <img src={TwitterLogo} alt="twitter-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button__facebook"
              url="https://www.facebook.com/Leeo.Redi/"
              isExternal
            >
              <img src={FacebookLogo} alt="facebook-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button__linkedin"
              url="https://www.linkedin.com/in/leonel-redigonda-809116194/"
              isExternal
            >
              <img src={LinkedinLogo} alt="linkedin-logo" />
            </LinkComponent>

            <LinkComponent
              className="footer__contact-button__github"
              url="https://github.com/Lredigonda"
              isExternal
            >
              <img src={GitHubLogo} alt="github-logo" />
            </LinkComponent>
          </div>
        </div>
        <Separator className="footer__separator" />
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>Copyright ® 2022</p>
          </div>
          <div className="footer__bottom__right">
            <TranslateButton />
            <DarkModeButton />
          </div>
        </div>
      </div>
    </footer>
  );
};
