import React, { useRef, useState } from "react";
import { motion, transform, useAnimation } from "framer-motion";
import "./Drag.css";

const Drag = () => {
  const ref = useRef();
  const animation = useAnimation();

  const handleDrag = (_, info) => {
    console.log(info.point.x);
    let scale = transform(info.point.x, [700, 1000], [0.5, 2]);
    let rotate = transform(info.point.x, [700, 1000], [0, 360]);

    animation.start({
      scale,
      rotate,
      transition: { type: "spring", velocity: 0 },
    });
  };

  return (
    <div className="drag">
      <div className="drag-elements">
        <motion.div className="element" animate={animation} />
        <motion.div className="element" animate={animation} />
      </div>
      <div className="drag-container" ref={ref}>
        <motion.div
          className="dragger"
          drag={"x"}
          dragConstraints={ref}
          dragElastic={false}
          dragMomentum={false}
          onDrag={handleDrag}
        />
      </div>
    </div>
  );
};

export default Drag;
