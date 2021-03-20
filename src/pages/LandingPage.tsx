import React from "react";
import { AnimatedMain } from "../utils/AnimatedMain";

interface LandingPageProps {}

// TODO: add bordercol to the theme selectors
const themeSelections = [
  {
    name: "light",
    bgcol: "#fff",
    bordercol: "black",
  },
  {
    name: "dark",
    bgcol: "#000000",
    bordercol: "#000000",
  },
  {
    name: "light",
    bgcol: "#476aca",
    bordercol: "red",
  },
  {
    name: "light",
    bgcol: "#32c552",
    bordercol: "red",
  },
];

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <AnimatedMain className="landing-page">
      <h1>Hello!</h1>
      <div className="theme-container">
        <p>Select your preffered theme!</p>
        <div className="theme-box">
          {themeSelections.map((theme, idx) => {
            const CSSProps: React.CSSProperties = {
              backgroundColor: theme.bgcol,
              border: `2px solid ${theme.bordercol}`,
            };
            // TODO add Theme selection logic
            return (
              <button
                style={CSSProps}
                key={idx}
                // TODO: Add isActiveTheme to the active theme
                className={`theme-btn btn`}
              ></button>
            );
          })}
        </div>
      </div>
    </AnimatedMain>
  );
};

export default LandingPage;
