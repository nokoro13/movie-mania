// Nav

import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className="main-nav" onClick={blur}>
      <NavLink to="/" className="site-title">
        <svg
          className="logo-moovy"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13.112 6l2.888-3.375-.781-.625-3.219 3.75-3.219-3.75-.781.625 2.888 3.375h-10.888v16h24v-16h-10.888zm7.888 14h-18v-12h18v12zm-4.594-5.247c-1.209.956-2.539 1.545-4.405 1.545-1.868 0-3.197-.589-4.407-1.545l-.394.394c.902 1.376 2.56 2.853 4.801 2.853 2.24 0 3.897-1.477 4.799-2.853l-.394-.394zm-7.206-4.753c-.663 0-1.2.537-1.2 1.2 0 .663.537 1.2 1.2 1.2.662 0 1.2-.537 1.2-1.2 0-.663-.538-1.2-1.2-1.2zm5.6 0c-.662 0-1.2.537-1.2 1.2 0 .663.538 1.2 1.2 1.2.663 0 1.2-.537 1.2-1.2 0-.663-.537-1.2-1.2-1.2z" />
        </svg>
        Moovy
      </NavLink>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
      <div className="hamburger">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
