import React from 'react';
import { NavLink, Link} from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  const { logOut, logIn } = props;
  return (
    <header className='header'>
      <nav className='header__wrapper'>
        { (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === '' || !localStorage.getItem('token')) ?
          <ul className='menu'>
            <li className='menu__logo'><NavLink to="/">Dayros</NavLink></li>
            <li onClick={()=>logIn()} className='menu__auth'><Link to="/photo">Войти</Link></li>
          </ul>
        :
          <ul className='menu'>
            <li className='menu__logo'><NavLink to="/photo">Dayros</NavLink></li>
            <li onClick={()=>logOut()} className='menu__auth'><Link to="/">Выйти</Link></li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
