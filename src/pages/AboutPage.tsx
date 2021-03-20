import { motion } from "framer-motion";
import React from "react";
import man from "../assets/man.svg";
import { PageAnimation } from "../utils/PageAnimations";
interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <motion.main
      variants={PageAnimation}
      initial="out"
      animate="in"
      className="about-page start-testing"
    >
      <img src={man} alt="man" />
    </motion.main>
  );
};

export default AboutPage;
