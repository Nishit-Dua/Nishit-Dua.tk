import { motion } from "framer-motion";
import React from "react";
import { PageAnimation } from "./PageAnimations";

interface AnimatedMainProps {
  className?: string;
}

export const AnimatedMain: React.FC<AnimatedMainProps> = ({
  children,
  className,
}) => {
  return (
    <motion.main
      className={`main-page ${className}`}
      variants={PageAnimation}
      initial="out"
      animate="in"
      exit="exit"
    >
      {children}
    </motion.main>
  );
};
