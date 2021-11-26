import React from "react";
import Reward from "react-rewards";
import { Button } from "./SpecialButtonEl";
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
        <Button onClick={handleFun}><a href={res} download="Alex Edwards.pdf">Resume</a></Button>
      </Reward>
    </>
  );
};

export default SpecialButton;
