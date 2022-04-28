import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Lock.css";

const Shackle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#612ed8"
    viewBox="80 0 300 150"
    height={100}
  >
    <path d="M162.5,102.5c0-39.977,32.523-72.5,72.5-72.5s72.5,32.523,72.5,72.5V160h30v-57.5C337.5,45.981,291.519,0,235,0   S132.5,45.981,132.5,102.5V160h30V102.5z" />
  </svg>
);
const Body = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#612ed8"
    style={{ transform: "translateY(-30px)" }}
  >
    <rect x="15" y="0" width="180" height="200" />
  </svg>
);
const Padlock = () => {
  const animation = useAnimation();
  const [open, setOpen] = useState(false);

  const handleLock = async () => {
    if (open) {
      await animation.start({ rotateY: 0 });
      await animation.start({ y: 0 });
    } else {
      await animation.start({ y: -20 });
      await animation.start({ rotateY: 180 });
    }
    setOpen(!open);
  };

  return (
    <div onClick={handleLock}>
      <motion.div animate={animation} style={{ transformOrigin: 162 }}>
        <Shackle />
      </motion.div>
      <Body />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 4,
  restSpeed: 0.5,
};

const Lock = () => {
  const lockAnimation = useAnimation();
  const textAnimation = useAnimation();

  const animateLock = async () => {
    lockAnimation.start({ x: -10, transition: spring });
    await lockAnimation.start({ scale: 0.2, transition: { delay: 0.5 } });
    textAnimation.start({
      width: 500,
      transition: { duration: 1.5, ease: "easeOut" },
    });
    lockAnimation.start({ x: -50 });
    textAnimation.start({ x: -40 });
  };

  animateLock();

  return (
    <div className="lock-container">
      <motion.div animate={lockAnimation} className="lock">
        <Padlock />
      </motion.div>
      <motion.div animate={textAnimation} className="text-lock">
        Swipe to unlock
      </motion.div>
    </div>
  );
};

export default Lock;
