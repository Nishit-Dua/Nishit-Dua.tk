import React, { useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";
import { AnimatedMain } from "../utils/AnimatedMain";

interface LandingPageProps {}

// TODO: add bordercol to the theme selectors
const themeSelections = [
  {
    themeName: "light",
    bgcol: "#fff",
    bordercol: "black",
  },
  {
    themeName: "dark",
    bgcol: "#000000",
    bordercol: "#000000",
  },
  // TODO Make Themes using CSS Variables
  {
    themeName: "bluish",
    bgcol: "#476aca",
    bordercol: "red",
  },
  {
    themeName: "greenish",
    bgcol: "#32c552",
    bordercol: "red",
  },
];

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { theme: currentTheme, dispatch } = useGlobalContext();
  const changeTheme = (theme: string) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  useEffect(() => {
    document.documentElement.classList.value = currentTheme;
  }, [currentTheme]);

  return (
    <AnimatedMain className="landing-page">
      <h1>Hello!</h1>
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
                  // TODO ADD CSS for the active theme
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
