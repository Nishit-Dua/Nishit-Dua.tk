import { Variants } from "framer-motion";

export const PageAnimation: Variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const PageAnimationProps = {
  variants: { PageAnimation },
  initial: "out",
  animate: "in",
  className: "start-testing",
};
