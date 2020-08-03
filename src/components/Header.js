import React from 'react';
import { NavLink, Link} from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  return (
    <header className='header'>
      <nav className='header__wrapper'>
        <ul className='menu'>
          <li><NavLink to='/'>Dayros</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
