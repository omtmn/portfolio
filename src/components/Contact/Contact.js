import React, { useState } from "react";
import Reward from "react-rewards";
import svg1 from "../../assets/svg-1.svg";
import Fade from "react-reveal/Fade";
import res from "../../assets/resume.pdf";
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
  Item,
  Anchor,
} from "./ContactEl";
import { Button } from "../ButtonEl";
import { Heading } from "../About/AboutEl";

const Contact = () => {
  const [hover, setHover] = useState(false);
  let reward;
  const handleFun = () => {
    reward.rewardMe();
  };
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <AboutContainer id="contact">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Fade left>
                  {" "}
                  <Heading>Contact</Heading>{" "}
                </Fade>
                <Fade top>
                  <Subtitle>
                    <List>
                      <Item href="https://www.linkedin.com/in/omtmn/">
                        LinkedIn
                      </Item>
                    </List>
                    <List>
                      <Item href="https://github.com/omtmn">Github</Item>
                    </List>
                    <List>
                      <Item href="mailto:alexscodespace@gmail.com">Email</Item>
                    </List>
                    <List>
                      <Item href="">
                        <Anchor href={res} download="Alex Edwards.pdf">
                          Download Resume
                        </Anchor>
                      </Item>
                    </List>
                  </Subtitle>
                </Fade>
                <BtnWrap>
                  <Reward
                    ref={(ref) => {
                      reward = ref;
                    }}
                    type="confetti"
                  >
                    <Button
                      smooth={true}
                      duration={2500}
                      spy={true}
                      exact="true"
                      onClick={handleFun}
                      to="home"
                      primary="true"
                      dark="true"
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                    >
                      Back to home {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                  </Reward>
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
  );
};

export default Contact;
