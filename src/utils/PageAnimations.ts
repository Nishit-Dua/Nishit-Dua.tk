import { Variants } from "framer-motion";

export const PageAnimation: Variants = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100%",
    scale: 0.3,
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      type: "tween",
    },
    scale: 0.3,
  },
};
