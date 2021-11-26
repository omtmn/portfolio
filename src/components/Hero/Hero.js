import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Reward from "react-rewards";
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
import SpecialButton from "../fun/SpecialButton";

const Hero = () => {
  const [hover, setHover] = useState(false);

  let reward;

  const onHover = () => {
    setHover(!hover);
  };

  const handleFun = () => {
    reward.rewardMe();
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade top>
          <HeroHeader> Hello, World </HeroHeader>
          <HeroP>
            {" "}
            Click below to contact <br /> or scroll to learn more{" "}
          </HeroP>
          <HeroBtnWrapper>
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
                to="contact"
                primary="true"
                dark="true"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Contact {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </Reward>
          </HeroBtnWrapper>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
