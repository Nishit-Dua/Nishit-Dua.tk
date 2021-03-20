import { Variants } from "framer-motion";

export const PageAnimation: Variants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

export const PageAnimationProps = {
  variants: { PageAnimation },
  initial: "out",
  animate: "in",
  className: "about-page start-testing",
};
