import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Route, useLocation } from "react-router";
import { Switch } from "react-router-dom";
import { Navbar } from "./components";
import { Library } from "./components/Library";
import { useGlobalContext } from "./context/AppContext";
import {
  AboutPage,
  ContactPage,
  GoofPage,
  LandingPage,
  ProjectsPage,
} from "./pages";

// !Goodbye Sweet Prince :(
// import { LazyComponentLoader } from "./utils/LazyComponentLoader";

const pagesAndRoute = [
  {
    route: "/",
    page: LandingPage,
  },
  {
    route: "/goofy",
    page: GoofPage,
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

  return (
    <>
      <Navbar />
      <Library />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={LandingPage} />
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
