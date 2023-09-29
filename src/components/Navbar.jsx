
import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import post from "../assets/Postit 1.png";
import { Container } from "react-bootstrap";

const Header = ({ t1, t2, t3, t4 }) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={post} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto my-2 my-lg-0 d-flex ">
              <div className="mt-3 me-3 ">
                <Nav
                  className="m-auto my-2 my-lg-0 justify-content-between gap-3"
                  navbarScroll
                >
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark fw-bold tag me-2"
                  >
                    Stories
                  </Link>

                  <Link className="text-decoration-none text-dark fw-bold tag">
                    Contact
                  </Link>
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark fw-bold tag"
                  >
                    {t1}
                  </Link>
                  {t2 && (
                    <Link
                      to="/register"
                      className="text-decoration-none text-dark fw-bold tag me-2"
                    >
                      <button className="btn btn-primary">{t2}</button>
                    </Link>
                  )}

                  {t4 && (
                    <Link
                      to="/register"
                      className="text-decoration-none text-dark fw-bold tag me-2"
                    >
                      <button className="btn btn-primary">{t4}</button>
                    </Link>
                  )}

                  <Link
                    to="/logout"
                    className="text-decoration-none text-dark fw-bold tag me-2"
                  >
                    {t3}
                  </Link>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;