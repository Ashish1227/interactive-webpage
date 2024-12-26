import React from "react";

const AnimationWrapper = ({ children, animationClass }) => {
  return <div className={`animate-${animationClass} p-5`}>{children}</div>;
};

export default AnimationWrapper;
