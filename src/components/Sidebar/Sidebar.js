import React from 'react'
import {
    SidebarContainer,
    Icon,
    ClosedIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarEl'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <ClosedIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="home">
                        Home
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/login'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
