import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import svg2 from '../../assets/svg-2.svg'
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
  ArrowRight,
} from "./AboutEl";
import { Button } from "../ButtonEl";

const About = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <AboutContainer id='about'>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>About Me</TopLine>
                <Fade bottom>
                  <Heading>Alex Edwards</Heading>
                </Fade>
                <Fade left>
                  <Subtitle> Im a Software Engineer, and a BloomTech Alumni. As a developer I thrive in an organized, productive environment that encourages honesty and communication allowing me to be the best I can for the company and myself. If you have a project you think I could help with, please get in touch.</Subtitle>
                </Fade>
                <BtnWrap>
                  <Button
                  smooth={true} duration={700} spy={true} exact='true'
                    primary="true"
                    dark="true"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    to="home"
                  >
                    Back to top {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={svg2} alt='About Me'></Img>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
