import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import Logo from "./components/Logo";
import ModeSwitcher from "./components/ModeSwitcher";
import TimerDisplay from "./components/TimerDisplay";
import SettingsIcon from "./components/SettingsIcon";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  const { openSettings } = useContext(AppContext);

  return (
    <>
      <Logo />
      <ModeSwitcher />
      <TimerDisplay />
      <SettingsIcon />
      {openSettings && <SettingsScreen />}
    </>
  );
}

export default App;
