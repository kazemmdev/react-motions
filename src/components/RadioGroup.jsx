import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RadioGroup.css";

const Radio = ({ name, selected = false }) => {
  return (
    <div className="radio">
      <div className="radio-btn">
        <motion.div
          initial={{ scale: 0 }}
          className="radion-circle"
          animate={{ scale: selected ? 1 : 0 }}
        />
      </div>
      {name}
    </div>
  );
};

const RadioGroup = ({ options, ...props }) => {
  const [select, setSelect] = useState(0);
  return (
    <div {...props}>
      {options.map((item, index) => (
        <div onClick={() => setSelect(index)} key={index}>
          <Radio name={item} selected={select === index} />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
