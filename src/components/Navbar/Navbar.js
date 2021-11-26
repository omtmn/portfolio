import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scrollNav } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavEl";

const Navbar = ({ toggle }) => {
  const [scroll, setScroll] = useState(false)

  const navOpacity = () => {
    if(window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const toggleHome = () => {
    scrollNav.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', navOpacity)
  }, [])

  return (
    <>
      <Nav scroll={scroll}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/"> Portfolio </NavLogo>
          <MobileMenu onClick={toggle}>
            <FaBars />
          </MobileMenu>
          <NavMenu>
            <NavItem>
              <NavLinks smooth={true} duration={700} spy={true} exact='true' offset={-80} to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={700} spy={true} exact='true' offset={-80} to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={700} spy={true} exact='true' offset={-80} to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={700} spy={true} exact='true' offset={-80} to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
