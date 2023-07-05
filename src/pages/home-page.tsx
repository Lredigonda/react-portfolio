import { AboutMe } from "../app-components/about-me";
import { SocialMedia } from "../app-components/social-media";
import { HomePanel } from "../app-components/home-panel";

import "./home-page.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <HomePanel />
      <AboutMe />
      <SocialMedia />
    </div>
  );
};
