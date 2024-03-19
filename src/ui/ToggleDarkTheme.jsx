import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext.jsx";

function ToggleDarkTheme() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-6 h-6 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-6 h-6 text-primary-900" />
      )}
    </button>
  );
}

export default ToggleDarkTheme;
