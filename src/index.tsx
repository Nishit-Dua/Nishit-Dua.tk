import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        {/* <AnimatePresence exitBeforeEnter={true}> */}
        <Switch>
          <App />
        </Switch>
        {/* </AnimatePresence> */}
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
