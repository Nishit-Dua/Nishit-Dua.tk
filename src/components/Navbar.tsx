import React from "react";
import { NavButton } from "./NavButton";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

interface NavbarProps {}

export const pages = [
  {
    name: "Home",
    page: "/",
  },
  {
    name: "About",
    page: "/about",
  },
  {
    name: "Projects",
    page: "/projects",
  },
  {
    name: "Contact Me :)",
    page: "/contact",
  },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const { currentPage, dispatch, isLibraryOpen } = useGlobalContext();

  return (
    <nav>
      <div className="nav-max">
        <Link to="/">
          <h2 className="logo">nishit dua</h2>
        </Link>
        <ul>
          {pages.map((page, idx) => {
            return (
              <li key={idx}>
                <Link
                  to={page.page}
                  className={`${
                    page.page === currentPage ? "page-active" : ""
                  }`}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className={`menu hamburger-react ${isLibraryOpen ? "opened" : ""}`}
          onClick={() => {
            dispatch({
              type: "TOGGLE_LIBRARY",
            });
          }}
        >
          <NavButton />
        </button>
      </div>
    </nav>
  );
};
