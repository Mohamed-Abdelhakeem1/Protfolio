import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface themeProps {
  mode: boolean;
  setTheme: (theme: boolean) => void;
}

const ThemeButton = ({ mode, setTheme }: themeProps) => {
  return (
    <button
      onClick={() => setTheme(!mode)}
      className="btnCircle normalBg smoothy shadow-xl/20"
    >
      {mode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeButton;
