import CircularProgress from "./CircularProgress";
import TextProgress from "./TextProgress";
import TimerButton from "./TimerButton";

function TimerDisplay() {
  return (
    <section
      className="
        my-10
        w-outer-circle-smartphone
        sm:w-outer-circle-desktop
        aspect-square
        bg-custom-gradient
        shadow-custom-shadow
        rounded-full
        flex justify-center items-center
      "
    >
      <div
        className="
          relative
          m-0
          w-inner-circle-progress-container-smartphone
          sm:w-inner-circle-progress-container-desktop
          aspect-square
          bg-midnight-blue
          p-3
          rounded-full
          flex justify-center items-center
        "
      >
        <CircularProgress />
        <TextProgress />
        <TimerButton />
      </div>
    </section>
  );
}

export default TimerDisplay;
