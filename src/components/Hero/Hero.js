import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Fade from "react-reveal/Fade";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeader,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroEl";
import { Button } from "../ButtonEl";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade top>
          <HeroHeader> Hello, World </HeroHeader>
          <HeroP> Click below to contact <br/> or scroll to learn more </HeroP>
          <HeroBtnWrapper>
            <Button
            smooth={true} duration={700} spy={true} exact='true'
              to="contact"
              primary="true"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Contact {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
