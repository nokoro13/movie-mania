import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const HamburgerMenu = ( )=> {

    const [burgerMenu, setBurgerMenu] = useState(false);
        const handleToggle = () => {
        setBurgerMenu(prev=>!prev);
    }


    return (
        <nav className='nav-bar'>
            <Hamburger onToggle={handleToggle}></Hamburger>
            <ul className={burgerMenu ? "showMenu" : "menuNav"}>

                <li className='burger-item'>
                <NavLink to="/">Home</NavLink>
                </li>

                <li className='burger-item'>
                <NavLink to="/about">About</NavLink>
                </li>

                <li className='burger-item'>
                <NavLink to="/favorites">Favorites</NavLink>
                </li>

            </ul>
        </nav>  
    )
}

export default HamburgerMenu;