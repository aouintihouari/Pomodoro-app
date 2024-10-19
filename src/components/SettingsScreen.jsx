import { useContext } from "react";
import { AppContext } from "./AppContext";
import TimeInput from "./TimeInput";
import FontOption from "./FontOption";
import ColorOption from "./ColorOption";
import ApplyButton from "./ApplyButton";

function SettingsScreen() {
  const {
    tempPomodoro,
    setTempPomodoro,
    tempShortBreak,
    setTempShortBreak,
    tempLongBreak,
    setTempLongBreak,
    tempFont,
    setTempFont,
    tempColor,
    setTempColor,
    handleOpenSettings,
  } = useContext(AppContext);

  return (
    <aside className="fixed flex justify-center items-center top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50">
      <div className="relative flex flex-col w-11/12 sm:w-4/12 h-auto rounded-lg bg-white">
        <header className="flex justify-between items-center p-5">
          <h2 className="text-h2 leading-h2-line text-center text-lg font-bold">
            Settings
          </h2>
          <svg
            className="cursor-pointer"
            onClick={handleOpenSettings}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path
              fill="#1E213F"
              fillRule="evenodd"
              d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
              opacity=".5"
            />
          </svg>
        </header>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <section className="p-5">
          <h4 className="text-h4 leading-h4-line text-center sm:text-left tracking-h4-l-space font-bold">
            TIME (MINUTES)
          </h4>
          <div className="flex sm:flex-row flex-col">
            <TimeInput
              title="pomodoro"
              time={tempPomodoro}
              setTime={setTempPomodoro}
            />
            <TimeInput
              title="short break"
              time={tempShortBreak}
              setTime={setTempShortBreak}
            />
            <TimeInput
              title="long break"
              time={tempLongBreak}
              setTime={setTempLongBreak}
            />
          </div>
        </section>
        <section className="w-11/12 mx-auto mb-5">
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div className="flex flex-col justify-center items-center sm:items-baseline sm:flex-row sm:justify-between sm:mt-5">
            <h4 className="text-h4 leading-h4-line text-center sm:text-left tracking-h4-l-space font-bold mt-5 sm:mt-0">
              FONT
            </h4>
            <div className="flex mt-5 sm:mt-0">
              <FontOption
                onSelectedFont={tempFont}
                oneHandleFont={setTempFont}
                name={"kumbh"}
              />
              <FontOption
                onSelectedFont={tempFont}
                oneHandleFont={setTempFont}
                name={"space"}
              />
              <FontOption
                onSelectedFont={tempFont}
                oneHandleFont={setTempFont}
                name={"roboto"}
              />
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto mb-10 mt-5">
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div className="flex flex-col justify-center items-center sm:items-center sm:flex-row sm:justify-between sm:mt-5">
            <h4 className="text-h4 leading-h4-line text-center sm:text-left tracking-h4-l-space font-bold mt-5 sm:mt-0">
              COLOR
            </h4>
            <div className="flex mt-5 sm:mt-0">
              <ColorOption
                onTempColor={tempColor}
                onHandleTempColor={setTempColor}
                name={"soft-red"}
              />
              <ColorOption
                onTempColor={tempColor}
                onHandleTempColor={setTempColor}
                name={"aqua-blue"}
              />
              <ColorOption
                onTempColor={tempColor}
                onHandleTempColor={setTempColor}
                name={"lavender-purple"}
              />
            </div>
          </div>
        </section>
        <ApplyButton />
      </div>
    </aside>
  );
}

export default SettingsScreen;
