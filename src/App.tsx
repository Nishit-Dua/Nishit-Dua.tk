import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "./components";
import { useGlobalContext } from "./context/AppContext";
import {
  AboutPage,
  ContactPage,
  HomePage,
  LandingPage,
  ProjectsPage,
} from "./pages";
import { LazyComponentLoader } from "./utils/LazyComponentLoader";

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
      <LazyComponentLoader path="/" pageToRender={LandingPage} />
      <LazyComponentLoader path="/home" pageToRender={HomePage} />
      <LazyComponentLoader path="/about" pageToRender={AboutPage} />
      <LazyComponentLoader path="/contact" pageToRender={ContactPage} />
      <LazyComponentLoader path="/projects" pageToRender={ProjectsPage} />
    </>
  );
}

export default App;
