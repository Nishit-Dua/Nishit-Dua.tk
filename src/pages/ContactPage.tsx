import { motion } from "framer-motion";
import React from "react";
import { PageAnimation } from "../utils/PageAnimations";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  return (
    <motion.main
      variants={PageAnimation}
      initial="out"
      animate="in"
      className="start-testing"
    >
      Contact Page
    </motion.main>
  );
};
export default ContactPage;
