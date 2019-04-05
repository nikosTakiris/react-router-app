import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';

const NavBar = () => {
  return (
    <div className="navbar">
    <ul className="navUl">
    <NavLink exact to="/react-router-app/" className="navLink" activeClassName="active-nav">Home</NavLink>
    <NavLink to="/frontend" className="navLink" activeClassName="active-nav">Frontend</NavLink>
    <NavLink to="/backend" className="navLink" activeClassName="active-nav">Backend</NavLink>
    </ul>
    </div>
  );
}

export default NavBar;
