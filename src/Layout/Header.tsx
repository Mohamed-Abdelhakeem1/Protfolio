import { Link } from "react-router-dom";
import ThemeButton from "../Components/Header/ThemeButton";

interface headerProps {
  mode: boolean;
  setTheme: (theme: boolean) => void;
}

const Header = ({ mode, setTheme }: headerProps) => {
  return (
    <nav className="normalText dark:bg-blck py-4 fixed w-full top-0 z-50 backdrop-blur-2xl">
      <div className="container flexBetween flex-col sm:flex-row gap-2 xs:gap-0">
        <Link to="/" className="text-3xl font-bold fontRoma">
          M.A.<span className="text-sm text-blue">dev</span>
        </Link>
        <ul className="flexBetween gap-3 sm:gap-5 md:gap-8 xl:gap-12 px-4 md:px-8 rounded-2xl normalBg fontMon shadow-xl/10">
          <li>
            <Link to="/" className="link smoothy">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link smoothy">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link smoothy">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link smoothy">
              Contact
            </Link>
          </li>
        </ul>
        <ThemeButton mode={mode} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Header;
