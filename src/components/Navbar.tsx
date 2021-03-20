import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const pages = [
  {
    name: "about",
    page: "/about",
  },
  {
    name: "home",
    page: "/home",
  },
  {
    name: "projects",
    page: "/projects",
  },
  {
    name: "Contact Me :)",
    page: "/contact",
  },
];

export const Navbar: React.FC<NavbarProps> = ({}) => {
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
                <Link to={page.page}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
        <Hamburger />
      </div>
    </nav>
  );
};
