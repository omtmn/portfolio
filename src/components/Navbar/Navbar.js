import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileMenu, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavEl'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"> Portfolio </NavLogo>
                    <MobileMenu onClick={toggle}>
                        <FaBars/>
                    </MobileMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">
                                Home 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">
                                About 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">
                                Projects 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">
                                Contact 
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
