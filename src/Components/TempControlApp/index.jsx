import { useState } from "react";
import "./style.css";

const TempControlApp = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("tempCold");

  const increaseTemp = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;

    if (newTemp >= 15) setTempColor("tempHot");

    setTemp(newTemp);
  };

  const decreaseTemp = () => {
    if (temp === 0) return;

    const newTemp = temp - 1;

    if (newTemp < 15) {
      setTempColor("tempCold");
    }

    setTemp(newTemp);
  };

  const resetTemp = () => {
    setTemp(10);
    setTempColor("tempCold");
  };

  return (
    <div className="frameDiv">
      <p className={`temperature ${tempColor}`}>{temp}℃</p>
      <div className="btnBox">
        <button className="btn" onClick={decreaseTemp}>
          -
        </button>
        <button className="resetBtn" onClick={resetTemp}>
          Reset
        </button>
        <button className="btn" onClick={increaseTemp}>
          +
        </button>
      </div>
    </div>
  );
};

export default TempControlApp;
