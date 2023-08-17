import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="/assets/Printlab-Text-Logo.png" alt="Printlab Logo" />
      <div className="nav-links">

        {/* DESKTOP LINKS */}
        <ul className="nav-links-ul hide-on-mobile">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="shop">SHOP</NavLink>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER MENU */}
        <div className="hide-on-desktop centersvg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>

        {/* SHOP BAG LOGO */}
        <div className="centersvg">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
