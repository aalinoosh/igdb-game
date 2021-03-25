import React, { useRef, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';



const Navbar = () => {
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="/" className='brand-title'>Brand Name</a>
        <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div ref={navbarLinks} className='navbar-links menu-collapse'>
          <ul className='links-list'>
            <li className='nav-item'>
              <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'> FEATURED</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/recent'>MOST RECENT</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='is-active' exact={true} className='nav-link ' to='/search'>
              <label>
                      <input type="text" placeholder="Find your game "/>
              </label>
                
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
