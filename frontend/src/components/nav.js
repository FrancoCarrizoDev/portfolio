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
        <div
          className={`navbar__wrapper navbar__background fixed-top ${
            scrollPosition > 1 ? 'bg-white border shadow-sm' : ''
          }`}
        >
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <NavBootstrap className="me-auto">
                  <NavBootstrap.Link href="#home">Home</NavBootstrap.Link>
                  <NavBootstrap.Link href="#link">Link</NavBootstrap.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavBootstrap>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
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
