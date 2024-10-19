import { useContext } from "react";
import { AppContext } from "./AppContext";

function ApplyButton() {
  const { selectedColor, handleApplySettings } = useContext(AppContext);

  const colorMap = {
    "soft-red": "bg-soft-red shadow-soft-red/50",
    "aqua-blue": "bg-aqua-blue shadow-aqua-blue/50",
    "lavender-purple": "bg-lavender-purple shadow-lavender-purple/50",
  };

  return (
    <section className="relative flex justify-center items-center">
      <button
        onClick={handleApplySettings}
        className={`absolute transform translate-y-1/1 ${colorMap[selectedColor]} text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-${selectedColor}/50 transition duration-300`}
      >
        Apply
      </button>
    </section>
  );
}

export default ApplyButton;
