import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./MouseParallax.css";

const MouseParallax = () => {
  const squreAnim = useAnimation();
  const circleAnim = useAnimation();

  const moveHandle = ({ clientX, clientY }) => {
    let offsetX = clientX - window.innerWidth / 2;
    let offsetY = clientY - window.innerHeight / 2;

    squreAnim.start({ x: offsetX / 10, y: offsetY / 10 });
    circleAnim.start({ x: offsetX / 6, y: offsetY / 6 });
  };

  return (
    <motion.div onMouseMove={moveHandle} className="mparallax">
      <motion.div className="circle" animate={circleAnim} />
      <motion.div className="squre" animate={squreAnim} />
    </motion.div>
  );
};

export default MouseParallax;
