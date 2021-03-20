import { motion } from "framer-motion";
import React from "react";
import { PageAnimation } from "../utils/PageAnimations";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <motion.main
      variants={PageAnimation}
      initial="out"
      animate="in"
      className="start-testing"
    >
      Home Page!
    </motion.main>
  );
};
export default HomePage;
