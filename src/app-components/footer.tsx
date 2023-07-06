import "./footer.scss";

import { Separator } from "../core-components/separator";

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
        </div>
        <Separator className="footer__separator" />
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>Copyright ® 2022</p>
          </div>
          <div className="footer__bottom__right"></div>
        </div>
      </div>
    </footer>
  );
};
