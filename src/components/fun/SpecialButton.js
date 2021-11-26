import React from "react";
import Reward from "react-rewards";
import { Button } from "./SpecialButtonEl";

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
        <Button onClick={handleFun}>🎉</Button>
      </Reward>
    </>
  );
};

export default SpecialButton;
