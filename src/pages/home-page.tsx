import { AboutMe } from "../app-components/about-me";
import { HomePanel } from "../app-components/home-panel";
import { SocialMedia } from "../app-components/social-media";

import "./home-page.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <HomePanel />
      <AboutMe />
      <SocialMedia haveTitle size="M" theme="dark" />
    </div>
  );
};
