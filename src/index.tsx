import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
