import { Navbar } from "./components";
import {
  AboutPage,
  ContactPage,
  HomePage,
  LandingPage,
  ProjectsPage,
} from "./pages";
import { LazyComponentLoader } from "./utils/LazyComponentLoader";

function App() {
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
