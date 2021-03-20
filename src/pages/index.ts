import React from "react";

const AboutPage = React.lazy(() => import("./AboutPage"));
const ContactPage = React.lazy(() => import("./ContactPage"));
const HomePage = React.lazy(() => import("./HomePage"));
const LandingPage = React.lazy(() => import("./LandingPage"));
const ProjectsPage = React.lazy(() => import("./ProjectsPage"));

export { HomePage, ContactPage, AboutPage, LandingPage, ProjectsPage };
