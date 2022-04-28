import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
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

// const MouseParallax = () => {
//   let mouseX = useMotionValue(0);
//   let mouseY = useMotionValue(0);

//   let squreX = useTransform(mouseX, (v) => v / 10);
//   let squreY = useTransform(mouseY, (v) => v / 8);
//   let circleX = useTransform(mouseX, (v) => v / 5);
//   let circleY = useTransform(mouseY, (v) => v / 4);

//   const moveHandle = ({ clientX, clientY }) => {
//     mouseX.set(clientX - window.innerWidth / 2);
//     mouseY.set(clientY - window.innerHeight / 2);
//   };

//   return (
//     <motion.div onMouseMove={moveHandle} className="mparallax">
//       <motion.div className="circle" style={{ x: circleX, y: circleY }} />
//       <motion.div className="squre" style={{ x: squreX, y: squreY }} />
//     </motion.div>
//   );
// };

export default MouseParallax;
