import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../Context/DarkmodeContext";

function DarkmodeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-600 hover:text-primary-900 transition-all duration-200 hover:font-black" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-600 hover:text-primary-900 transition-all duration-200 hover:font-black" />
      )}
    </button>
  );
}

export default DarkmodeToggle;
