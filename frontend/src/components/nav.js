import React, { useState, useLayoutEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {
  Navbar,
  Nav as NavBootstrap,
  Container,
  NavDropdown
} from 'react-bootstrap'
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

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
        <Navbar
          bg="white"
          expand="lg"
          fixed="top"
          className={`${scrollPosition > 0 ? 'border' : ''} py-4`}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Link className="navbar__link" to="/">
                <small>{data.strapiGlobal.siteName}</small>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="flex-grow-0">
              <NavBootstrap>
                <NavBootstrap.Link className="navbar__link" href="#home">
                  <small>Home</small>
                </NavBootstrap.Link>
                <NavBootstrap.Link className="navbar__link" href="#link">
                  <small>Skills</small>
                </NavBootstrap.Link>
                <NavBootstrap.Link className="navbar__link" href="#link">
                  <small>Experience</small>
                </NavBootstrap.Link>
                <NavBootstrap.Link className="navbar__link" href="#link">
                  <small>Projects</small>
                </NavBootstrap.Link>
                <NavBootstrap.Link className="navbar__link" href="#link">
                  <small>Contact</small>
                </NavBootstrap.Link>
              </NavBootstrap>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    />
  )
}

export default Nav

/*<nav className="container h-100 d-flex justify-content-around align-items-center">
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
          </nav> */
