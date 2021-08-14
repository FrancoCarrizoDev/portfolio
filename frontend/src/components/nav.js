import React, { useState, useLayoutEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <StaticQuery
      query={graphql`
        query {
          strapiGlobal {
            siteName
          }
          allStrapiCategory {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          className={`navbar__wrapper navbar__background fixed-top ${
            scrollPosition > 1 ? "bg-white border shadow-sm" : ""
          }`}
        >
          <nav className="container h-100 d-flex justify-content-around align-items-center">
            <div className="w-100 d-flex align-items-center">
              <Link className="navbar__link" to="/">
                {data.strapiGlobal.siteName}
              </Link>
            </div>
            <div className="w-100">
              <ul
                className="d-flex justify-content-end mb-0 navbar__ul__format"
                style={{ gap: "2rem" }}
              >
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Experience</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    />
  );
};

export default Nav;
