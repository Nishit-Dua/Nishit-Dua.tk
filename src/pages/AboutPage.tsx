import React from "react";
import man from "../assets/man.svg";
import { AnimatedMain } from "../utils/AnimatedMain";
interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <AnimatedMain className="start-testing">
      <img src={man} alt="man" />
    </AnimatedMain>
  );
};

export default AboutPage;
