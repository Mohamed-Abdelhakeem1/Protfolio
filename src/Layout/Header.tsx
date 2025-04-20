import ThemeButton from "../Components/Header/ThemeButton";

interface headerProps {
  mode: boolean;
  setTheme: (theme: boolean) => void;
}

const Header = ({ mode, setTheme }: headerProps) => {
  return (
    <nav className="normalText dark:bg-blck py-4 fixed w-full top-0 z-50 backdrop-blur-2xl">
      <div className="container flexBetween flex-col sm:flex-row gap-2 xs:gap-0">
        <a href="/" className="text-3xl font-bold fontRoma">
          M.A.<span className="text-sm text-blue">dev</span>
        </a>
        <ul className="flexBetween gap-3 sm:gap-5 md:gap-8 xl:gap-12 px-4 md:px-8 rounded-2xl normalBg fontMon shadow-xl/10">
          <li>
            <a href="/" className="link smoothy">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="link smoothy">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="link smoothy">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="link smoothy">
              Contact
            </a>
          </li>
        </ul>
        <ThemeButton mode={mode} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Header;
