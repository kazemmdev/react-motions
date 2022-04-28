import React from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Card = ({ background = "red" }) => {
  let animation = useAnimation();
  let mv = useMotionValue(0);
  let rotateMv = useTransform(mv, [-200, 200], [-50, 50]);
  let opacityMv = useTransform(mv, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleMouseRelease = () => {
    if (Math.abs(mv.current) < 100) {
      animation.start({ x: 0 });
    } else animation.start({ x: Math.sign(mv.current) * 200 });
  };

  return (
    <motion.div
      drag="x"
      animate={animation}
      dragConstraints={{ left: -200, right: 200 }}
      onDragEnd={handleMouseRelease}
      className="card"
      style={{
        x: mv,
        rotate: rotateMv,
        opacity: opacityMv,
        background,
      }}
    />
  );
};

export default Card;
