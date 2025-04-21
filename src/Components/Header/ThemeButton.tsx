import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", JSON.stringify(!darkMode));
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={() => handleThemeChange()}
      className="btnCircle normalBg smoothy shadow-xl/20"
    >
      {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeButton;
