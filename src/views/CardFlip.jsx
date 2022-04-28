import React from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "./CardFlip.css";

const CardFlip = () => {
  let animation = useAnimation();
  let mv = useMotionValue(0);
  let rotateMv = useTransform(mv, [-200, 200], [-50, 50]);
  let opacityMv = useTransform(mv, [-200, 0, 200], [0, 1, 0]);

  const handleMouseRelease = () => {
    if (Math.abs(mv.current) < 100) {
      animation.start({ x: 0 });
    } else animation.start({ x: Math.sign(mv.current) * 200 });
  };

  return (
    <div className="flip-container">
      <motion.div
        drag="x"
        animate={animation}
        dragConstraints={{ left: -200, right: 200 }}
        onDragEnd={handleMouseRelease}
        className="card-1"
        style={{
          x: mv,
          rotate: rotateMv,
          opacity: opacityMv,
        }}
      />
    </div>
  );
};

export default CardFlip;
