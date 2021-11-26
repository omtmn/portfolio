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
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade top>
          <HeroHeader> Hello, World </HeroHeader>
          <HeroP> Scroll to get to know me </HeroP>
          <HeroBtnWrapper>
            <Button
              to="register"
              primary="true"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
