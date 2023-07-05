import "./translate-button.scss";
import { useState } from "react";

export const TranslateButton = () => {
  const [translate, setTranslate] = useState(true);

  const toggleLenguage = () => {
    setTranslate(!translate);
  };

  return (
    <button className="translate-button" onClick={toggleLenguage}>
      <b>{`${translate === true ? "ES" : "EN"}`}</b>
    </button>
  );
};
