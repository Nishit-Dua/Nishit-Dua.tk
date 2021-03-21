import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Route, useLocation } from "react-router";
import { Switch } from "react-router-dom";
import { Navbar } from "./components";
import { useGlobalContext } from "./context/AppContext";
// import {
//   AboutPage,
//   ContactPage,
//   HomePage,
//   LandingPage,
//   ProjectsPage,
// } from "./pages";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { LazyComponentLoader } from "./utils/LazyComponentLoader";

const pagesAndRoute = [
  {
    route: "/",
    page: LandingPage,
  },
  {
    route: "/home",
    page: HomePage,
  },
  {
    route: "/about",
    page: AboutPage,
  },
  {
    route: "/contact",
    page: ContactPage,
  },
  {
    route: "/projects",
    page: ProjectsPage,
  },
];

function App() {
  const { dispatch } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "SET_PATH", payload: location.pathname });
  }, [location.pathname, dispatch]);

  console.log(location);
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={LandingPage} />
          {/* <LazyComponentLoader path="/home" children={HomePage} />
          <LazyComponentLoader path="/about" children={AboutPage} />
          <LazyComponentLoader path="/contact" children={ContactPage} />
          <LazyComponentLoader path="/projects" children={ProjectsPage} /> */}
          {pagesAndRoute.map((item, idx) => {
            return (
              <Route path={item.route} key={idx} exact>
                {<item.page />}
              </Route>
            );
          })}
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
