import { Squash as Hamburger } from "hamburger-react";
import React from "react";
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
        <Hamburger
          toggled={isLibraryOpen}
          onToggle={() => {
            dispatch({
              type: "TOGGLE_LIBRARY",
            });
          }}
        />
      </div>
    </nav>
  );
};
