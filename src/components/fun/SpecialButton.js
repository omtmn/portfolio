import React from "react";
import Reward from "react-rewards";
import { Button, Anchor } from "./SpecialButtonEl";
import res from '../../assets/resume.pdf'

const SpecialButton = () => {
  let reward 
  const handleFun = () => {
      reward.rewardMe()
  };
  return (
    <>
      <Reward
        ref={(ref) => { reward = ref }}
        type="confetti"
      >
        <Button onClick={handleFun}><Anchor href={res} download="Alex Edwards.pdf">Resume</Anchor></Button>
      </Reward>
    </>
  );
};

export default SpecialButton;
