import { useContext } from "react";
import { AppContext } from "./AppContext";

const colorMap = {
  "soft-red": "hover-soft-red",
  "aqua-blue": "hover-aqua-blue",
  "lavender-purple": "hover-lavender-purple",
};

function TimerButton() {
  const {
    selectedColor,
    isRunning,
    setIsRunning,
    remainingTime,
    setRemainingTime,
    initialTime,
  } = useContext(AppContext);

  const handleClick = () => {
    if (remainingTime === 0) {
      setRemainingTime(initialTime);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  return (
    <h3
      className={`absolute bottom-20 font-bold text-h4 text-pale-blue sm:text-h3 leading-h3-line tracking-h3-l-space uppercase cursor-pointer ${colorMap[selectedColor]} transition duration-500`}
      onClick={handleClick}
    >
      {isRunning ? "Pause" : remainingTime === 0 ? "Restart" : "Start"}
    </h3>
  );
}

export default TimerButton;
