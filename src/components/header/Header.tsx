import React from 'react';
import Navbar from './Navbar';
import arrow from '../../assets/images/icon-arrow-down.svg';

export default function Header () {
  return (
    <section className="section">
      <header className="header">
        <Navbar />
        <div className="flex flex--center flex--column header__section">
          <h2 className="text text--center text--white header__title text--title">We are creatives</h2>
          <img src={arrow} alt="arrow" className="text text--center header__arrow" />
        </div>
      </header>
    </section>
  );
}
