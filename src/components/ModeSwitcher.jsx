import { useContext } from "react";
import { AppContext } from "./AppContext";

function ModeSwitcher() {
  const { selectedMode, handleSelectedMode, selectedColor } =
    useContext(AppContext);

  return (
    <nav className="mt-10 text-pale-blue text-p-m font-bold z-10">
      <ul className="flex bg-midnight-blue p-1 rounded-full">
        <li
          onClick={() => handleSelectedMode("pomodoro")}
          className={`mr-1 rounded-full p-4 cursor-pointer transition-all duration-500 ${
            selectedMode === "pomodoro"
              ? `bg-${selectedColor} text-dark-navy`
              : "opacity-50 hover:opacity-100"
          }`}
        >
          pomodoro
        </li>
        <li
          onClick={() => handleSelectedMode("short break")}
          className={`mr-1 rounded-full p-4 cursor-pointer transition-all duration-500 ${
            selectedMode === "short break"
              ? `bg-${selectedColor} text-dark-navy`
              : "opacity-50 hover:opacity-100"
          }`}
        >
          short break
        </li>
        <li
          onClick={() => handleSelectedMode("long break")}
          className={`rounded-full p-4 cursor-pointer transition-all duration-500 ${
            selectedMode === "long break"
              ? `bg-${selectedColor} text-dark-navy`
              : "opacity-50 hover:opacity-100"
          }`}
        >
          long break
        </li>
      </ul>
    </nav>
  );
}

export default ModeSwitcher;
