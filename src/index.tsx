import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <App />
          </Switch>
        </AnimatePresence>
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
