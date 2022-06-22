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
        <AboutContainer id='projects'>
          <AboutWrapper>
            <AboutRow>
              <Column1>
                <TextWrapper>
                    <TopLine> Projects </TopLine>
                  <Fade bottom>
                    <Heading>Past Work</Heading>
                  </Fade>
                  <Fade left>
                    <Subtitle> Here are some of the projects I had the opprotunity to work on during my journey as a developer. For more information on a specific project, click the image and It will direct you to the github repository where the ReadMe will explain the project.</Subtitle>
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
