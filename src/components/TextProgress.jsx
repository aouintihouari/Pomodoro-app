import { useContext } from "react";
import { AppContext } from "./AppContext";

function TextProgress() {
  const { remainingTime } = useContext(AppContext);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <section className="absolute flex justify-center items-center">
      <h1 className="text-h1-smartphone sm:text-h1 h1-line h1-l-space font-bold text-pale-blue">
        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </h1>
    </section>
  );
}

export default TextProgress;
