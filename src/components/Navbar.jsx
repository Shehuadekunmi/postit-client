import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import post from '../assets/Postit 1.png'
import nav from '../assets/nav.png'

const Header = ({ t1, t2, t3, t4 }) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2  head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={post} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="m-auto   my-2 my-lg-0 gap-1" navbarScroll>
             

                <Link to="/allstories" className=''>Stories</Link>

                <Link >Contact</Link>
                {/* <img src={nav} alt="" /> */}

                <Link to="/login">{t1}</Link>

                {t2 && (
                  <Link to="/register">
                    <button className="button">{t2}</button>
                  </Link>
                )}

                {t4 && (
                  <Link to="/">
                    <button className="button">{t4}</button>
                  </Link>
                )}

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header