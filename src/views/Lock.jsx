import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
    style={{ transform: "translateY(-10px)" }}
  >
    <rect x="15" y="0" width="180" height="200" />
  </svg>
);

const Lock = () => {
  const animation = useAnimation();
  const [open, setOpen] = useState(false);

  const handleLock = async () => {
    if (open) {
      await animation.start({ rotateY: 0 });
      await animation.start({ y: 0 });
    } else {
      await animation.start({ y: -30 });
      await animation.start({ rotateY: 180 });
    }
    setOpen(!open);
  };
  return (
    <div onClick={handleLock} style={{ cursor: "pointer" }}>
      <motion.div animate={animation} style={{ transformOrigin: 170 }}>
        <Shackle />
      </motion.div>
      <Body />
    </div>
  );
};

export default Lock;
