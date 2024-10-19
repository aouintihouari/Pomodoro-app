import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const CircularProgress = ({ defaultSize = 340, strokeWidth = 10 }) => {
  const { selectedColor, remainingTime, initialTime } = useContext(AppContext);
  const [size, setSize] = useState(defaultSize);

  const updateSize = () => {
    if (window.innerWidth <= 400) {
      setSize(280);
    } else {
      setSize(defaultSize);
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Calcul de la progression basée sur le temps restant et le temps initial
  const progress = (remainingTime / initialTime) * 100;

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * progress) / 100;

  const colors =
    selectedColor === "soft-red"
      ? "#F87070"
      : selectedColor === "aqua-blue"
      ? "#70F3F8"
      : "#D881F8";

  return (
    <div className="skill" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.5s ease-out",
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
