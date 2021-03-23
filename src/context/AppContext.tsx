import React, { createContext, useContext, useReducer } from "react";
import { reducer, ReturnValue } from "./reducer";

const AppContext = createContext<ReturnValue | null>(null);

const loadThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("site-theme");
  if (theme) return theme;
  else return "light";
};

export const initialState = {
  currentPage: "/",
  theme: loadThemeFromLocalStorage(),
  isLibraryOpen: false,
};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext)!;
};

export { AppProvider, useGlobalContext };
