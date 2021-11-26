import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Projects from "./Projects";
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
  Column2,
  ArrowForward,
  ArrowRight,
} from "./ProjectInfoEl";
import { Button } from "../ButtonEl";

const ProjectInfo = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };

    return (
        <>
        <AboutContainer>
          <AboutWrapper>
            <AboutRow>
              <Column1>
                <TextWrapper>
                    <TopLine> Projects </TopLine>
                  <Fade bottom>
                    <Heading>Past Work</Heading>
                  </Fade>
                  <Fade left>
                    <Subtitle> Im a Software Engineer, and a BloomTech Alumni. As a developer I thrive in an organized, productive environment that encourages honesty and communication allowing me to be the best I can for the company and myself. If you have a project you think I could help with, please get in touch.</Subtitle>
                  </Fade>
                  <BtnWrap>
                    <Button
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
                    <Projects/>
                </ImgWrap>
              </Column2>
            </AboutRow>
          </AboutWrapper>
        </AboutContainer>
      </>
    )
}

export default ProjectInfo
