import React from "react";
import { Link } from "react-router-dom";
import { AnimatedMain } from "../utils/AnimatedMain";

interface ErrorPageProps {}
const ErrorPage: React.FC<ErrorPageProps> = ({}) => {
  return (
    <AnimatedMain className="start-testing error-page">
      <h1>404</h1>
      <p>This was the right URL no, was it?</p>

      <Link to="/" className="back-btn">
        Back Home
      </Link>
    </AnimatedMain>
  );
};

export default ErrorPage;
