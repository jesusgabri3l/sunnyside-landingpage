import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';

export default function Navbar () {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <nav className="navbar">
      <h1 className="text navbar__logo">
        <img src={logo} alt="Sunnyside logo" />
      </h1>
      <button className="navbar__hamburger" type="button" onClick={handleShowNavMenu}>
        <img src={hamburger} alt="hamburger" />
      </button>
      <ul className={`navbar__list ${showNavMenu ? 'active' : ''}`}>
        <button className="navbar__list__close" type="button" onClick={handleShowNavMenu}>x</button>
        <li className="navbar__list__item">
          <a href="/" className="navbar__list__item__link">About</a>
        </li>
        <li className="navbar__list__item">
          <a href="/" className="navbar__list__item__link">Services</a>
        </li>
        <li className="navbar__list__item">
          <a href="/" className="navbar__list__item__link">Projects</a>
        </li>
        <li className="navbar__list__item">
          <button type="button" className="navbar__list__item__button text text--title">Contact</button>
        </li>
      </ul>
    </nav>
  );
}
