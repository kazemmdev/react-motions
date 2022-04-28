import Card from "../components/Card";
import "./CardFlip.css";

const CardFlip = () => {
  return (
    <div className="flip-container">
      <Card background="red" />
      <Card background="green" />
      <Card background="gray" />
      <Card background="orange" />
    </div>
  );
};

export default CardFlip;
