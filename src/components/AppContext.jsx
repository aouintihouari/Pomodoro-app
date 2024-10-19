import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedMode, setSelectedMode] = useState("pomodoro");
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [activeTab, setActiveTab] = useState(pomodoro);
  const [remainingTime, setRemainingTime] = useState(pomodoro * 60);
  const [initialTime, setInitialTime] = useState(pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedFont, setSelectedFont] = useState("kumbh");
  const [selectedColor, setSelectedColor] = useState("soft-red");

  const [tempPomodoro, setTempPomodoro] = useState(pomodoro);
  const [tempShortBreak, setTempShortBreak] = useState(shortBreak);
  const [tempLongBreak, setTempLongBreak] = useState(longBreak);
  const [tempFont, setTempFont] = useState(selectedFont);
  const [tempColor, setTempColor] = useState(selectedColor);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  function handleSelectedMode(mode) {
    setSelectedMode(mode);
    const selectedTime =
      mode === "pomodoro"
        ? pomodoro
        : mode === "short break"
        ? shortBreak
        : longBreak;
    setActiveTab(selectedTime);
    setRemainingTime(selectedTime * 60);
    setInitialTime(selectedTime * 60);
    setIsRunning(false);
  }

  function handleOpenSettings() {
    setOpenSettings((open) => !open);
  }

  function handleApplySettings() {
    setPomodoro(tempPomodoro);
    setShortBreak(tempShortBreak);
    setLongBreak(tempLongBreak);
    setSelectedFont(tempFont);
    setSelectedColor(tempColor);
    document.body.className = `font-${tempFont}`;
    setOpenSettings(false);

    const selectedTime =
      selectedMode === "pomodoro"
        ? tempPomodoro
        : selectedMode === "short break"
        ? tempShortBreak
        : tempLongBreak;

    setRemainingTime(selectedTime * 60);
    setInitialTime(selectedTime * 60);
  }

  return (
    <AppContext.Provider
      value={{
        openSettings,
        setOpenSettings,
        selectedMode,
        setSelectedMode,
        pomodoro,
        setPomodoro,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        activeTab,
        setActiveTab,
        remainingTime,
        setRemainingTime,
        initialTime,
        isRunning,
        setIsRunning,
        selectedFont,
        setSelectedFont,
        selectedColor,
        setSelectedColor,
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
        handleSelectedMode,
        handleOpenSettings,
        handleApplySettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
