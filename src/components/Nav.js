// Nav

import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

  const Nav = () => {
    function blur(e) {
      e.target.blur();
    }
    
  return (
    <nav className="main-nav" onClick={blur}>
      <NavLink to="/" className="site-title">Site Title</NavLink>
    
      <ul className='nav-menu'>
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
      <div className='hamburger'>
        <HamburgerMenu/>
          
        
      </div>
          
        
    </nav>
  );
};

export default Nav;
