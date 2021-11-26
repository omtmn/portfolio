import React, { useState } from "react";
import svg1  from '../../assets/svg-1.svg'
import Fade from "react-reveal/Fade";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Subtitle,
  BtnWrap,
  TextWrapper,
  ImgWrap,
  Img,
  Column2,
  ArrowForward,
  ArrowRight,
  List,
  Item
} from "./ContactEl";
import { Button } from "../ButtonEl";
import { Heading } from "../About/AboutEl";

const Contact = () => {
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
                  <Fade left> <Heading>Contact</Heading> </Fade>
                  <Fade top>
                    <Subtitle>
                        <List>
                            <Item href="https://www.linkedin.com/in/omtmn/">LinkedIn</Item>
                        </List>
                        <List>
                            <Item href="https://github.com/omtmn">Github</Item>
                        </List>
                        <List>
                            <Item href="mailto:alexscodespace@gmail.com">Email</Item>
                        </List>
                    </Subtitle>
                  </Fade>
                  <BtnWrap>
                    <Button
                      primary="true"
                      dark="true"
                      to="home"
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                    >
                      Back to top {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={svg1}></Img>
                </ImgWrap>
              </Column2>
            </AboutRow>
          </AboutWrapper>
        </AboutContainer>
      </>
    )
}

export default Contact