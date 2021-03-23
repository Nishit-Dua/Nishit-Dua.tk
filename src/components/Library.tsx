import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
import { pages } from "./Navbar";

interface LibraryProps {}

export const Library: React.FC<LibraryProps> = () => {
  const { isLibraryOpen, currentPage } = useGlobalContext();
  return (
    <section className={`library ${isLibraryOpen ? "active" : ""}`}>
      <nav>
        <ul>
          {pages.map((page, id) => {
            return (
              <li key={id} className="mr">
                <Link
                  className={`${
                    page.page === currentPage ? "page-active" : ""
                  }`}
                  to={page.page}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
