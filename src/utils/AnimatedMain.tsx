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
      className={className}
      variants={PageAnimation}
      initial="out"
      animate="in"
    >
      {children}
    </motion.main>
  );
};
