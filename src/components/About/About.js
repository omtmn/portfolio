import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    TextWrapper,
    ImgWrap,
    Img,
    Column2,
    ArrowForward,
    ArrowRight
} from './AboutEl'
import {Button} from '../ButtonEl'

const About = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <AboutContainer id={''}>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>About Me</TopLine>
                                <Fade bottom><Heading>Alex Edwards</Heading></Fade>
                                <Fade left><Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Subtitle></Fade>
                                <BtnWrap>
                                <Button primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover} to="home">
                                     Back to top {hover ? <ArrowForward/> : <ArrowRight/> }
                                </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src="">

                                </Img>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
