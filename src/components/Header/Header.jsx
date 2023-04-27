/** @format */
import { useState } from "react";

import "../Header/header.scss";

const Header = () => {
  const [colorMode, setColorMode] = useState(false);
  const [changeText, setchangeText] = useState(false);

  function changeMode() {
    setColorMode(!colorMode);
    setchangeText(!changeText);
  }
  document.body.className = `${colorMode ? "dark" : "light"}`;
  return (
    <header>
      <h1>Hello world!</h1>
      <button
        className={`changeMode ${colorMode ? "dark" : "light"}`}
        onClick={changeMode}
      >
        {changeText ? (
          <i class='fa-sharp fa-solid fa-sun'></i>
        ) : (
          <i class='fa-solid fa-moon'></i>
        )}
      </button>
    </header>
  );
};

export default Header;
