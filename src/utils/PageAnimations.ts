import { Variants } from "framer-motion";

export const PageAnimation: Variants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
};

export const PageAnimationProps = {
  variants: { PageAnimation },
  initial: "out",
  animate: "in",
  className: "start-testing",
};
