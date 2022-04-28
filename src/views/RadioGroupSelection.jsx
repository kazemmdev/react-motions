import React from "react";
import RadioGroup from "../components/RadioGroup";

// import "./RadioGroup.css";

const RadioGroupSelection = () => {
  let options = ["select one", "select two", "select three"];
  return (
    <div>
      <RadioGroup options={options} />
    </div>
  );
};

export default RadioGroupSelection;
