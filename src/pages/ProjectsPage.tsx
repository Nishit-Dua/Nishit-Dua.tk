import { motion } from "framer-motion";
import React from "react";
import { PageAnimation } from "../utils/PageAnimations";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
  return (
    <motion.main
      variants={PageAnimation}
      initial="out"
      animate="in"
      className="start-testing"
    >
      Projects Page
    </motion.main>
  );
};

export default ProjectsPage;
