import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { AnimatedMain } from "../utils/AnimatedMain";

interface LandingPageProps {}

// TODO: add bordercol to the theme selectors
const themeSelections = [
  {
    themeName: "light",
    bgcol: "#fff",
    bordercol: "#666",
  },
  {
    themeName: "dark",
    bgcol: "#2b2b2b",
    bordercol: "#cfcfcf",
  },
  // TODO Make Themes using CSS Variables
  {
    themeName: "solaized",
    bgcol: "#073642",
    bordercol: "#85744e",
  },
  {
    themeName: "solaized-light",
    bgcol: "#fdf6e3",
    bordercol: "#1488a5",
  },
];

const LandingPage: React.FC<LandingPageProps> = () => {
  const { theme: currentTheme, dispatch } = useGlobalContext();
  const changeTheme = (theme: string) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  return (
    <AnimatedMain className="landing-page">
      <div className="head">
        <h1>Hello!</h1>
        <p>My name is Nishit Dua, and I am a developer</p>
      </div>
      <div className="theme-container">
        <p>Choose a theme!</p>
        <div className="theme-box">
          {themeSelections.map((theme, idx) => {
            const CSSProps: React.CSSProperties = {
              backgroundColor: theme.bgcol,
              border: `2px solid ${theme.bordercol}`,
            };
            return (
              <button
                style={CSSProps}
                key={idx}
                className={`${
                  currentTheme === theme.themeName ? "theme-active" : ""
                }`}
                onClick={() => changeTheme(theme.themeName)}
              ></button>
            );
          })}
        </div>
      </div>
    </AnimatedMain>
  );
};

export default LandingPage;
