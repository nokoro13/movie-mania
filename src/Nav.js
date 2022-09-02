    // Nav

import { NavLink } from 'react-router-dom';

    const Nav = () => {
    function blur(e) {
        e.target.blur();
    }

  return (
    <nav className="main-nav" onClick={blur}>
      <ul>
        <li className='nav-item'>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>

      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

    </nav>
  );
};

export default Nav;
