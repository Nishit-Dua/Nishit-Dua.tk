import React from "react";
import { AnimatedMain } from "../utils/AnimatedMain";
interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <AnimatedMain className="start-testing about-page">About Page</AnimatedMain>
  );
};

export default AboutPage;
