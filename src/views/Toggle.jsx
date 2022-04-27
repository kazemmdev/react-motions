import React from "react";
import { motion, useCycle } from "framer-motion";
import "./Toggle.css";

const Toggle = () => {
  const [mode, setMode] = useCycle("off", "on");

  return (
    <motion.div
      animate={mode}
      variants={{
        off: { background: "#999" },
        on: { background: "#00b149" },
      }}
      onClick={() => setMode()}
      className="wrapper"
    >
      <motion.div
        className="toggler"
        variants={{
          off: { x: 0 },
          on: { x: 40 },
        }}
        transition={{ type: "tween", stiffness: 50, duration: 0.2 }}
      />
    </motion.div>
  );
};

export default Toggle;
