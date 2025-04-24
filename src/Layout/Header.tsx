import { Link, NavLink } from "react-router-dom";
import ThemeButton from "../Components/Header/ThemeButton";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const openClass: string = menuOpen ? "flexBetween" : "hidden sm:flex";
  return (
    <nav className="normalText dark:bg-blck py-4 fixed w-full top-0 z-50 backdrop-blur-2xl bodyBg">
      <div className="container flexBetween gap-2 xs:gap-0 relative">
        <Link to="/" className="text-3xl font-bold fontRoma">
          M.A.<span className="text-sm text-blue">dev</span>
        </Link>
        <ul
          onClick={() => setMenuOpen(false)}
          className={`absolute top-13 xs:left-1/8 w-full xs:w-3/4 sm:w-fit ${openClass} flex-col sm:flex-row sm:static py-3 sm:py-0 gap-6 sm:gap-5 md:gap-8 xl:gap-12 px-4 md:px-8 rounded-lg  sm:rounded-2xl normalBg fontMon shadow-xl/10 `}
        >
          <li className="navItem">
            <NavLink to="/" className="link smoothy">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/about" className="link smoothy">
              About
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/projects" className="link smoothy">
              Projects
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/contact" className="link smoothy">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flexCenter gap-2">
          <ThemeButton />
          <div
            className=" btnCircle normalBg smoothy shadow-xl/20 sm:hidden"
            onClick={() => toggleMenu()}
          >
            {menuOpen ? <IoMdClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
