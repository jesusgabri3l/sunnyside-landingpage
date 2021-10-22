import React from 'react';
import Images from './Images';
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';

export default function Footer () {
  return (
    <>
      <Images />
      <footer className="footer">
        <img className="footer__logo" alt="logo" src={logo} />
        <ul className="footer__list">
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">About</a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">Services</a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">Projects</a>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">
              <img src={facebook} alt="" className="footer__list__item__link__icon" />
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">
              <img src={instagram} alt="" className="footer__list__item__link__icon" />
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">
              <img src={twitter} alt="" className="footer__list__item__link__icon" />
            </a>
          </li>
          <li className="footer__list__item">
            <a className="footer__list__item__link" href="/">
              <img src={pinterest} alt="" className="footer__list__item__link__icon" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
